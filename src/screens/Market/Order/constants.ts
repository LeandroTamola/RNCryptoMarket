import { OrderType, SideType } from '@src/api/models/Order';
import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
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

export const LIMIT_OPTIONS: { id: number; label: string; value: OrderType }[] = [
  { id: 1, label: 'Limit', value: 'LIMIT' },
  { id: 2, label: 'Market', value: 'MARKET' },
  { id: 3, label: 'Stop Loss', value: 'STOP_LOSS' },
  { id: 4, label: 'Stop Loss Limit', value: 'STOP_LOSS_LIMIT' },
  { id: 5, label: 'Take Profit', value: 'TAKE_PROFIT' },
  { id: 6, label: 'Take Profit Limit', value: 'TAKE_PROFIT_LIMIT' },
  { id: 7, label: 'Limit Maker', value: 'LIMIT_MAKER' },
];
