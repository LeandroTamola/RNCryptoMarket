import { SymbolDto } from '@src/api/models/ExchangeInformation';
import { Text } from '@src/components/Text/Text';
import React, { FC, memo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import tailwind from 'twrnc';

interface SymbolRowItemProps {
  item: SymbolDto;
  onPress: (symbol: string) => void;
}

const SymbolRowItem: FC<SymbolRowItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item.symbol)}>
      <View style={styles.leftContainer}>
        <Text style={styles.baseAsset}>{item.baseAsset}</Text>
        <Text style={styles.quoteAsset}>/{item.quoteAsset}</Text>
      </View>
      <View style={styles.rightContainer} />
    </TouchableOpacity>
  );
};

const MemoizedSymbolRowItem = memo(SymbolRowItem);
export { MemoizedSymbolRowItem as SymbolRowItem };

const styles = StyleSheet.create({
  container: tailwind`flex-row items-center justify-between px-4 py-2`,
  leftContainer: tailwind`flex-row items-center`,
  baseAsset: tailwind`text-white text-lg font-bold`,
  quoteAsset: tailwind`text-gray-400 text-lg`,
  rightContainer: tailwind`flex-row items-center`,
});
