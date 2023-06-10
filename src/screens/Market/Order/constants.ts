import { OrderType, SideType } from '@src/api/models/Order';
import { NewOrderPostFormValues } from '@src/api/services/trade/types';
import * as Yup from 'yup';

export const NewOrderSchema = Yup.object<NewOrderPostFormValues>().shape({
  symbol: Yup.string().required(),
  side: Yup.string().required(),
  type: Yup.string().required(),
  quantity: Yup.number().required(),
  price: Yup.number().required(),
});

export const initialValues: Omit<NewOrderPostFormValues, 'symbol' | 'recvWindow' | 'timeInForce'> = {
  price: 0,
  quantity: 0,
  side: 'BUY',
  type: 'LIMIT',
};

export const SIDE_OPTIONS: { id: number; label: string; value: SideType }[] = [
  { id: 0, label: 'BUY', value: 'BUY' },
  { id: 1, label: 'SELL', value: 'SELL' },
];

export const LIMIT_OPTIONS: { id: number; label: string; value: Extract<OrderType, 'LIMIT' | 'MARKET'> }[] = [
  { id: 1, label: 'Limit', value: 'LIMIT' },
  { id: 2, label: 'Market', value: 'MARKET' },
];
