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
