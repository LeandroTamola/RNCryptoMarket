import { GetOrderBookParams } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';
import { useGetOrderBook } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';
import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
import { useFormik } from 'formik';
import { NewOrderSchema, initialValues } from './constants';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorProps } from '@src/navigation/RootNavigator/types';

type OrderViewModelProps = {
  getOrderBookParams: GetOrderBookParams;
};
const OrderViewModel = ({ getOrderBookParams }: OrderViewModelProps) => {
  const getOrderBook = useGetOrderBook(getOrderBookParams);
  const navigation = useNavigation<RootNavigatorProps>();

  const formik = useFormik<NewOrderPostFormValues>({
    initialValues,
    validationSchema: NewOrderSchema,
    validateOnChange: false,
    onSubmit: async (values) => await values,
  });

  const onSymbolPress = () => {
    navigation.navigate('SymbolSelection');
  };

  const onTypePress = (itemId: number) => {
    console.log(itemId);
  };

  const onOrderTypeSelect = (option: { id: string; label: string }) => {
    console.log(option);
  };
  return { getOrderBook, onTypePress, onOrderTypeSelect, formik, onSymbolPress };
};

export { OrderViewModel };
