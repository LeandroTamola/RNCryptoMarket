import React, { FC } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, ActivityIndicator } from 'react-native';
import tailwind from 'twrnc';
import { OrderRow } from './OrderRow';
import { Text } from '../Text/Text';
import { useGetOrderBookWebSocket } from '@src/api/queries/market/orderBook/hooks/useGetOrderBookSubscription';
import { useOrderContext } from '@src/context/OrderContext';

interface OrderBookProps {
  containerStyle?: StyleProp<ViewStyle>;
  quantity?: number;
}

type OperationType = { type: 'a' | 'b' };

const ListHeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerLabel}>Price</Text>
      <Text style={styles.headerLabel}>Amount</Text>
    </View>
  );
};

const OrderBook: FC<OrderBookProps> = ({ containerStyle, quantity = 5 }) => {
  const { symbol } = useOrderContext();
  const { data } = useGetOrderBookWebSocket(symbol.toLowerCase());

  const OrderBookColumn = ({ type }: OperationType) => {
    return (
      <View style={styles.OrderContainer}>
        <ListHeaderComponent />
        {data?.[type]?.slice(0, quantity).map(([price, amount]) => (
          <OrderRow key={`${price}-${amount}`} price={price} amount={amount} type={type} />
        ))}
      </View>
    );
  };

  if (!data)
    return (
      <View style={[styles.container, styles.loadingContianer, containerStyle]}>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={[styles.container, containerStyle]}>
      <OrderBookColumn type="a" />
      <OrderBookColumn type="b" />
    </View>
  );
};

export { OrderBook };

const styles = StyleSheet.create({
  container: tailwind`w-full flex-row py-3 bg-black rounded-xl min-h-55`,
  loadingContianer: tailwind`items-center justify-center`,
  OrderContainer: tailwind`w-1/2`,
  header: tailwind`flex-row justify-around border-b-2 border-zinc-800 pb-3 mb-1`,
  headerLabel: tailwind`text-zinc-400 text-xs`,
});
