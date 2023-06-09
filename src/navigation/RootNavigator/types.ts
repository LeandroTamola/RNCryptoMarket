import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NewOrderPostFormValues } from '@src/api/queries/trade/order/useMutateNewOrder';

export type RootNavigatorParams = {
  Order: undefined;
  SymbolSelection: undefined;
  Success: NewOrderPostFormValues;
};

export type RootNavigatorProps = NativeStackNavigationProp<RootNavigatorParams>;

export type RootNavigatorRouteProp<T extends keyof RootNavigatorParams> = RouteProp<RootNavigatorParams, T>;
