import api from '@src/api/instances/api';
import { AxiosResponse } from 'axios';

import { OrderBookDto } from '@src/api/models/OrderBook';
import { GetOrderBookParams } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';

const RESOURSES = {
  GET_DEPTH: '/api/v3/depth',
};

const getDepth = async (params: GetOrderBookParams): Promise<OrderBookDto> => {
  const { data } = await api.get<GetOrderBookParams, AxiosResponse<OrderBookDto>>(RESOURSES.GET_DEPTH, { params });
  return data;
};

export const OrderBookServices = {
  getDepth,
};
