import React, { FC } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { OrderBookDto } from '@src/api/models/OrderBook';
import tailwind from 'twrnc';
import { OrderRow } from './OrderRow';
import { Text } from '../Text/Text';

interface OrderBookProps {
  data: OrderBookDto;
  containerStyle: StyleProp<ViewStyle>;
}

type OperationType = { type: 'bids' | 'asks' };

const OrderBook: FC<OrderBookProps> = ({ data, containerStyle }) => {
  const ListHeaderComponent = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.column}>Price</Text>
        <Text style={styles.column}>Amount</Text>
      </View>
    );
  };

  const OrderBookColumn = ({ type }: OperationType) => {
    return (
      <View style={styles.OrderContainer}>
        <ListHeaderComponent />
        {data[type].map(([price, amount]) => (
          <OrderRow key={`${price}-${amount}`} price={price} amount={amount} type={type} />
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <OrderBookColumn type="asks" />
      <OrderBookColumn type="bids" />
    </View>
  );
};

export { OrderBook };

const styles = StyleSheet.create({
  container: tailwind`flex-row py-3 bg-black rounded-xl`,
  OrderContainer: tailwind`w-1/2`,
  header: tailwind`justify-between flex-row border-b-2 border-zinc-800 pb-3 mb-1`,
  column: tailwind`w-1/2 text-zinc-400 text-center`,
});
