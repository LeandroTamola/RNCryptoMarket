import { GetOrderBookParams } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';
import { useGetOrderBook } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';

type HomeViewModelProps = {
  getOrderBookParams: GetOrderBookParams;
};
const HomeViewModel = ({ getOrderBookParams }: HomeViewModelProps) => {
  const getOrderBook = useGetOrderBook(getOrderBookParams);
  return { getOrderBook };
};

export { HomeViewModel };
