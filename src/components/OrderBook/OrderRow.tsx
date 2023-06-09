import React, { FC, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';

interface OrderRowProps {
  price: string;
  amount: string;
  type: 'a' | 'b';
}

const OrderRow: FC<OrderRowProps> = ({ price, amount, type }) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.column, type === 'b' ? styles.bidsPrice : styles.asksPrice]}>
        {parseFloat(price).toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </Text>
      <Text style={styles.column}>{parseFloat(amount).toLocaleString(undefined, { minimumFractionDigits: 5 })}</Text>
    </View>
  );
};

const MemoizedOrderRow = memo(OrderRow);
export { MemoizedOrderRow as OrderRow };

const styles = StyleSheet.create({
  row: tailwind`flex-row justify-around py-2`,
  column: tailwind.style(`text-xs`, { fontSize: 10 }),
  bidsPrice: tailwind`text-green-600 font-600`,
  asksPrice: tailwind`text-red-600 font-600`,
});
