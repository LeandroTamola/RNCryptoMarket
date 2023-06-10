import { AxiosResponse } from 'axios';
import Api from '@src/api/instances/api';
import { FromatOrderServices } from './utils';
import { OrderDto } from '@src/api/models/Order';
import { WEBSOCKET_BASE_URL } from '@src/api/config/config';
import {
  CancelOrderDeleteParams,
  ExecutionReport,
  NewOrderPostBody,
  NewOrderPostFormValues,
  PlaceOrderParams,
} from './types';

const RESOURSES = {
  ORDER: '/api/v3/order',
};

const DEFAULT_VALUES: Pick<NewOrderPostBody, 'recvWindow' | 'timeInForce'> = {
  recvWindow: 5000,
  timeInForce: 'GTC',
};

const newOrder = async (body: NewOrderPostFormValues): Promise<OrderDto> => {
  const params = FromatOrderServices.formatOrderParams({ ...body, ...DEFAULT_VALUES } as NewOrderPostBody);
  const { data } = await Api.withSignature.post<NewOrderPostBody, AxiosResponse<OrderDto>>(RESOURSES.ORDER, undefined, {
    params,
  });
  return data;
};

const cancelOrder = async (params: CancelOrderDeleteParams) => {
  const data = await Api.withSignature.delete(RESOURSES.ORDER, { params });
  return data;
};

const ORDER_PENDING_TIME = 60000;
const placeOrder = async ({ handleOrderPlaced, ...body }: PlaceOrderParams) => {
  const data = await newOrder(body);
  if (body.type === 'MARKET') return data;
  handleOrderPlaced(data, 'add');
  const { orderId, symbol } = data;
  const orderTimestamp = Date.now();
  const websocket = new WebSocket(WEBSOCKET_BASE_URL);

  websocket.onopen = () => {
    websocket.send(JSON.stringify({ method: 'SUBSCRIBE', params: [`${symbol}@executionReport`], id: orderId }));
  };

  let timer: NodeJS.Timeout;
  const completionPromise = new Promise((resolve, reject) => {
    websocket.onmessage = (event) => {
      const eventData = JSON.parse(event.data) as ExecutionReport;
      if (eventData.e === 'executionReport' && eventData.s === symbol && eventData.i === orderId) {
        if (eventData.X === 'FILLED') {
          websocket.close();
          clearInterval(timer);
          resolve(eventData);
        }
      }
    };

    timer = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - orderTimestamp >= ORDER_PENDING_TIME) {
        cancelOrder({ orderId, symbol });
        clearInterval(timer);
        websocket.close();
        handleOrderPlaced(data, 'remove');
        reject(new Error("Order didn't fill in time."));
      }
    }, 1000);
  });

  await completionPromise;
};

export const OrderServices = {
  newOrder,
  cancelOrder,
  placeOrder,
};
