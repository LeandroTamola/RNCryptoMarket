import { useGetOrderBook } from '@src/api/queries/market/orderBook/hooks/useGetOrderBook';
import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
import { useFormik } from 'formik';
import { NewOrderSchema, SIDE_OPTIONS, initialValues } from './constants';
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

  const { handleChange, values } = formik;

  const onSymbolPress = () => {
    navigation.navigate('SymbolSelection');
  };

  const onTypePress = (itemId: number) => {
    const sideValue = SIDE_OPTIONS.find(({ id }) => id === itemId);
    if (!sideValue) return;
    handleChange('side')(sideValue.value);
  };

  const onOrderTypeSelect = (option: string) => {
    handleChange('type')(option);
  };

  const onChangeLimitPrice = (amount: number) => {
    handleChange('price')(String(amount));
  };

  const onChangeAmount = (amount: number) => {
    handleChange('quantity')(String(amount));
  };

  const isSubmitDisabled = !values.side || !Number(values.price) || !Number(values.quantity) || !values.type;

  return {
    getOrderBook,
    onTypePress,
    onOrderTypeSelect,
    onChangeLimitPrice,
    onChangeAmount,
    formik,
    onSymbolPress,
    symbol,
    isSubmitDisabled,
  };
};

export { OrderViewModel };
