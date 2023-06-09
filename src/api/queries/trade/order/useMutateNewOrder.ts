import { OrderType, SideType } from '@src/api/models/Order';
import { OrderServices } from '@src/api/services/trade/OrderService';
import { useMutation } from '@tanstack/react-query';

export const useMutateNewOrder = () => useMutation(OrderServices.newOrder);

export type NewOrderPostBody = {
  symbol: string;
  side: SideType;
  type: OrderType;
  timeInForce: 'GTC' | 'IOC' | 'FOK';
  quantity: number;
  price: number;
  recvWindow: number;
  timestamp: number;
  signature: string;
};

export type NewOrderPostFormValues = Omit<NewOrderPostBody, 'timestamp' | 'signature' | 'timeInForce' | 'recvWindow'>;
