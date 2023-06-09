import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Order, SymbolSelection } from '@src/screens';
import { RootNavigatorParams } from './types';
import { OrderProvider } from '@src/context/OrderContext';
import { SuccessScreen } from '@src/screens/Market/Success/SuccessScreen';

export const RootStack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator: FC = () => {
  return (
    <OrderProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Order" component={Order} />
          <RootStack.Screen name="SymbolSelection" component={SymbolSelection} options={{ presentation: 'modal' }} />
          <RootStack.Screen name="Success" component={SuccessScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </OrderProvider>
  );
};

export { RootNavigator };
