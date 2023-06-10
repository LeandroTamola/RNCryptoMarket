import { OrderServices } from '@src/api/services/trade/OrderService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OrderDto } from '@src/api/models/Order';
import { NewOrderPostFormValues } from '@src/api/services/trade/types';
import { OrderBookKeys } from '@src/api/queries/market/orderBook/OrderBookKeys';
import { OrderBookWebSocketDto } from '@src/api/models/OrderBook';

export const useMutatePlaceOrder = () => {
  const queryClient = useQueryClient();

  const handleOrderPlaced = (order: OrderDto) => {
    const orderBookData = queryClient.getQueryData<OrderBookWebSocketDto>(OrderBookKeys.orderBookWebSocket);
    if (!orderBookData) return;
    if (order.side === 'BUY') {
      orderBookData.b = [[order.price, order.origQty], ...orderBookData.b];
    } else {
      orderBookData.a = [[order.price, order.origQty], ...orderBookData.a];
    }
    queryClient.setQueryData(OrderBookKeys.orderBookWebSocket, orderBookData);
  };

  const mutation = useMutation((params: NewOrderPostFormValues) => {
    if (params.type === 'MARKET') return OrderServices.newOrder(params);

    return OrderServices.placeOrder({ ...params, handleOrderPlaced });
  });
  return mutation;
};
