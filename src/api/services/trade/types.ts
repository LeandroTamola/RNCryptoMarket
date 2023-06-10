import { OrderDto, OrderType, SideType, TimeInForceType } from '@src/api/models/Order';

export interface ExecutionReport {
  e: string;
  s: string;
  i: number;
  X: string;
}

export type NewOrderPostBody = {
  symbol: string;
  side: SideType;
  type: OrderType;
  timeInForce: TimeInForceType;
  quantity: number;
  price: number;
  recvWindow: number;
  timestamp: number;
  signature: string;
};

export type PlaceOrderParams = NewOrderPostFormValues & { handleOrderPlaced: (order: OrderDto) => void };

export type CancelOrderDeleteParams = {
  symbol: string;
  orderId: number;
};

export type NewOrderPostFormValues = Omit<NewOrderPostBody, 'timestamp' | 'signature' | 'timeInForce' | 'recvWindow'>;
