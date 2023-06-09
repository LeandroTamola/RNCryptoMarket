import { useQuery } from '@tanstack/react-query';
import { OrderBookKeys } from '../OrderBookKeys';
import { OrderBookServices } from '@src/api/services/market/OrderBook/OrderBookService';
import { OrderBookDto } from '@src/api/models/OrderBook';

export const useGetOrderBook = (params: GetOrderBookParams) => {
  return useQuery<OrderBookDto>({
    queryKey: OrderBookKeys.depth(params),
    queryFn: () => OrderBookServices.getDepth(params),
    enabled: false,
  });
};

export type GetOrderBookParams = {
  symbol: string;
  limit: number;
};
