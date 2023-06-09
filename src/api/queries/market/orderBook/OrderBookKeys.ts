import { GetOrderBookParams } from './hooks/useGetOrderBook';

export const OrderBookKeys = {
  depth: (params: GetOrderBookParams) => ['depth', params] as const,
};
