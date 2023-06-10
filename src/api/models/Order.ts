export type OrderType =
  | 'LIMIT'
  | 'MARKET'
  | 'STOP_LOSS'
  | 'STOP_LOSS_LIMIT'
  | 'TAKE_PROFIT'
  | 'TAKE_PROFIT_LIMIT'
  | 'LIMIT_MAKER';

export type SideType = 'BUY' | 'SELL';

export type TimeInForceType = 'GTC' | 'IOC' | 'FOK';

export type OrderStatusType =
  | 'FILLED'
  | 'CANCELED'
  | 'NEW'
  | 'PARTIALLY_FILLED'
  | 'PENDING_CANCEL'
  | 'REJECTED'
  | 'EXPIRED';

export type OrderDto = {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: '9000.00000000';
  origQty: '0.01000000';
  executedQty: '0.01000000';
  cummulativeQuoteQty: '264.68200000';
  status: OrderStatusType;
  timeInForce: TimeInForceType;
  type: OrderType;
  side: SideType;
  stopPrice: string;
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  workingTime: number;
  origQuoteOrderQty: string;
  selfTradePreventionMode: string;
};
