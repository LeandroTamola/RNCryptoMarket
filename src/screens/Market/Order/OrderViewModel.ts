import { useGetOrderBook } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';
import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
import { useFormik } from 'formik';
import { NewOrderSchema, initialValues } from './constants';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorProps } from '@src/navigation/RootNavigator/types';
import { useOrderContext } from '@src/context/OrderContext';

const OrderViewModel = () => {
  const { symbol } = useOrderContext();
  const navigation = useNavigation<RootNavigatorProps>();
  const getOrderBook = useGetOrderBook({ limit: 5, symbol });

  const formik = useFormik<NewOrderPostFormValues>({
    initialValues: { ...initialValues, symbol: symbol || '' },
    validationSchema: NewOrderSchema,
    validateOnChange: false,
    onSubmit: async (values) => await values,
  });

  const { handleChange } = formik;

  const onSymbolPress = () => {
    navigation.navigate('SymbolSelection');
  };

  const onTypePress = (itemId: number) => {
    console.log(itemId);
  };

  const onOrderTypeSelect = (option: { id: string; label: string }) => {
    handleChange('type')(option.id);
    console.log(option);
  };
  return { getOrderBook, onTypePress, onOrderTypeSelect, formik, onSymbolPress, symbol };
};

export { OrderViewModel };
