import { GetOrderBookParams } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';
import { useGetOrderBook } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';
import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
import { useFormik } from 'formik';
import { NewOrderSchema, initialValues } from './constants';

type HomeViewModelProps = {
  getOrderBookParams: GetOrderBookParams;
};
const HomeViewModel = ({ getOrderBookParams }: HomeViewModelProps) => {
  const getOrderBook = useGetOrderBook(getOrderBookParams);

  const formik = useFormik<NewOrderPostFormValues>({
    initialValues,
    validationSchema: NewOrderSchema,
    validateOnChange: false,
    onSubmit: async (values) => await values,
  });

  const onTypePress = (itemId: number) => {
    console.log(itemId);
  };

  const onOrderTypeSelect = (option: { id: string; label: string }) => {
    console.log(option);
  };
  return { getOrderBook, onTypePress, onOrderTypeSelect, formik };
};

export { HomeViewModel };
