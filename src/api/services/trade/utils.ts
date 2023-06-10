import { NewOrderPostBody } from './types';

type ReturnType = Omit<NewOrderPostBody, 'price' | 'timeInForce'>;

const formatOrderParams = (body: NewOrderPostBody): ReturnType => {
  if (body.type === 'LIMIT') return body;
  return {
    symbol: body.symbol,
    side: body.side,
    type: body.type,
    quantity: body.quantity,
    recvWindow: body.recvWindow,
    timestamp: body.timestamp,
    signature: body.signature,
  };
};

export const FromatOrderServices = {
  formatOrderParams,
};
