import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrderDto } from '@src/api/models/Order';

export type RootNavigatorParams = {
  Order: undefined;
  SymbolSelection: undefined;
  Success: OrderDto;
};

export type RootNavigatorProps = NativeStackNavigationProp<RootNavigatorParams>;

export type RootNavigatorRouteProp<T extends keyof RootNavigatorParams> = RouteProp<RootNavigatorParams, T>;
