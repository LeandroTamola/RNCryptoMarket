import { OrderType, SideType } from '@src/api/models/Order';
import { useMutation } from '@tanstack/react-query';

export const useMutateNewOrder = () => useMutation({});

export type NewOrderPostBody = {
  symbol: string;
  side: SideType;
  type: OrderType;
  timeInForce: 'GTC' | 'IOC' | 'FOK';
  quantity: number;
  //   quoteOrderQty?: number;
  price: number;
  //   newClientOrderId?: number;
  //   strategyId?: number;
  //   strategyType?: number;
  //   stopPrice?: number; // USED WITH STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT ORDERS
  //   trailingDelta?: number; // USED WITH STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT ORDERS
  //   icebergQty?: number;
  //   newOrderRespType?: 'ACK' | 'RESULT' | 'FULL';
  recvWindow: number;
  timestamp?: number;
  signature?: string;
};

export type NewOrderPostFormValues = Omit<NewOrderPostBody, 'timestamp' | 'signature'>;
