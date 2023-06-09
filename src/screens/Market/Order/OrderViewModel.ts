import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';
import { useFormik } from 'formik';
import { NewOrderSchema, SIDE_OPTIONS, initialValues } from './constants';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorProps } from '@src/navigation/RootNavigator/types';
import { useOrderContext } from '@src/context/OrderContext';
import { StringUtils } from '@src/utils/stringUtils';

const OrderViewModel = () => {
  const { symbol } = useOrderContext();
  const navigation = useNavigation<RootNavigatorProps>();

  const { handleChange, values } = useFormik<NewOrderPostFormValues>({
    initialValues: { ...initialValues, symbol: symbol || '' },
    validationSchema: NewOrderSchema,
    validateOnChange: false,
    onSubmit: async (values) => await values,
  });

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

  const onChangeLimitPrice = (amount: string) => {
    handleChange('price')(amount);
  };

  const onChangeAmount = (amount: string) => {
    handleChange('quantity')(amount);
  };

  const submitButtonLabel = StringUtils.capitalizeFirstLetter(values.side);
  const isSubmitDisabled = !values.side || !Number(values.price) || !Number(values.quantity) || !values.type;
  const isBuySide = values.side === 'BUY';

  return {
    onTypePress,
    onOrderTypeSelect,
    onChangeLimitPrice,
    onChangeAmount,
    onSymbolPress,
    symbol,
    isSubmitDisabled,
    values,
    submitButtonLabel,
    isBuySide,
  };
};

export { OrderViewModel };
