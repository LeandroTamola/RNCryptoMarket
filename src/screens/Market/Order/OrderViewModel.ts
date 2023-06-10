import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useMutatePlaceOrder } from '@src/api/queries/trade/order/hooks/useMutatePlaceOrder';
import { NewOrderSchema, SIDE_OPTIONS, initialValues } from './constants';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorProps } from '@src/navigation/RootNavigator/types';
import { useOrderContext } from '@src/context/OrderContext';
import { StringUtils } from '@src/utils/stringUtils';
import { NewOrderPostFormValues } from '@src/api/services/trade/types';
import { showErrorAlert } from './utils';

const OrderViewModel = () => {
  const { symbol } = useOrderContext();
  const navigation = useNavigation<RootNavigatorProps>();

  const mutateNewOrder = useMutatePlaceOrder();

  const { handleChange, values, handleSubmit, isSubmitting } = useFormik<NewOrderPostFormValues>({
    initialValues: { ...initialValues, symbol } as NewOrderPostFormValues,
    validationSchema: NewOrderSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      const formattedValues = { ...values, symbol };
      await mutateNewOrder.mutateAsync(formattedValues, {
        onSuccess(data) {
          if (!data) return;
          navigation.navigate('Success', data);
          return;
        },
        onError(error) {
          showErrorAlert(error as unknown as AxiosError);
        },
      });
    },
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
  const showPriceInput = values.type === 'LIMIT';
  const isSubmitDisabled =
    !values.side || !Number(values.quantity) || !values.type || (showPriceInput && !Number(values.price));
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
    handleSubmit,
    isSubmitting,
    showPriceInput,
  };
};

export { OrderViewModel };
