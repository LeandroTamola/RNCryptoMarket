import { OrderServices } from '@src/api/services/trade/OrderService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OrderDto } from '@src/api/models/Order';
import { NewOrderPostFormValues } from '@src/api/services/trade/types';
import { OrderBookKeys } from '@src/api/queries/market/orderBook/OrderBookKeys';
import { OrderBookWebSocketDto } from '@src/api/models/OrderBook';

export const useMutatePlaceOrder = () => {
  const queryClient = useQueryClient();

  const handleOrderPlaced = (order: OrderDto, action: 'add' | 'remove') => {
    const orderBookData = queryClient.getQueryData<OrderBookWebSocketDto>(OrderBookKeys.orderBookWebSocket);
    if (!orderBookData) return;
    const type = order.side === 'BUY' ? 'b' : 'a';
    if (action === 'add') {
      orderBookData[type] = [[order.price, order.origQty], ...orderBookData[type]];
    } else {
      orderBookData[type].shift();
    }
    queryClient.setQueryData(OrderBookKeys.orderBookWebSocket, orderBookData);
  };

  const mutation = useMutation((params: NewOrderPostFormValues) => {
    if (params.type === 'MARKET') return OrderServices.newOrder(params);

    return OrderServices.placeOrder({ ...params, handleOrderPlaced });
  });
  return mutation;
};
