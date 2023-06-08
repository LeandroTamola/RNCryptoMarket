import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';

interface OrderRowProps {
  price: string;
  amount: string;
  type: 'bids' | 'asks';
}
const truncated = (value: number) => Math.floor(value * 100) / 100; // = 5.46

const OrderRow: FC<OrderRowProps> = ({ price, amount, type }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.column}>{truncated(Number(amount))}</Text>
      <Text style={[styles.column, type === 'bids' ? styles.bidsPrice : styles.asksPrice]}>
        {truncated(Number(price))}
      </Text>
    </View>
  );
};

export { OrderRow };

const styles = StyleSheet.create({
  row: tailwind`flex-row py-2`,
  column: tailwind`w-1/2 text-center`,
  bidsPrice: tailwind`text-green-600 font-600`,
  asksPrice: tailwind`text-red-600 font-600`,
});
