import { AxiosResponse } from 'axios';
import { NewOrderPostBody, NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
import Api from '@src/api/instances/api';

const RESOURSES = {
  POST_ORDER: '/api/v3/order/test',
};

const DEFAULT_VALUES: Pick<NewOrderPostBody, 'recvWindow' | 'timeInForce'> = {
  recvWindow: 5000,
  timeInForce: 'GTC',
};

const newOrder = async (body: NewOrderPostFormValues): Promise<any> => {
  const { data } = await Api.withSignature.post<NewOrderPostBody, AxiosResponse<any>>(RESOURSES.POST_ORDER, undefined, {
    params: { ...body, ...DEFAULT_VALUES },
  });
  return data;
};

export const OrderServices = {
  newOrder,
};
