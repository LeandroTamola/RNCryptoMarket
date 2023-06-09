import { OrderType } from '@src/api/models/Order';
import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
import * as Yup from 'yup';

export const NewOrderSchema = Yup.object<NewOrderPostFormValues>().shape({
  symbol: Yup.string().required(),
  side: Yup.string().required(),
  type: Yup.string().required(),
  timeInForce: Yup.string().required(),
  quantity: Yup.number().required(),
  price: Yup.number().required(),
  recvWindow: Yup.number().required(),
});

export const initialValues: NewOrderPostFormValues = {
  price: 0,
  quantity: 0,
  recvWindow: 5000,
  side: 'BUY',
  symbol: '',
  timeInForce: 'GTC',
  type: 'LIMIT',
};

export const SECTIONS_OPTIONS = [
  { id: 0, label: 'BUY' },
  { id: 1, label: 'SELL' },
];

export const LIMIT_OPTIONS: { id: OrderType; label: string }[] = [
  { id: 'LIMIT', label: 'Limit' },
  { id: 'MARKET', label: 'Market' },
  { id: 'STOP_LOSS', label: 'Stop Loss' },
  { id: 'STOP_LOSS_LIMIT', label: 'Stop Loss Limit' },
  { id: 'TAKE_PROFIT', label: 'Take Profi' },
  { id: 'TAKE_PROFIT_LIMIT', label: 'Take Profit Limit' },
  { id: 'LIMIT_MAKER', label: 'Limit Maker' },
];
