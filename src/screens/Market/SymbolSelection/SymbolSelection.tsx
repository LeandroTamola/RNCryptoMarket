import React, { FC, useCallback } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import tailwind from 'twrnc';
import { SymbolSelectionViewModel } from './SymbolSelectionViewModel';
import { SymbolRowItem } from './components/SymbolRowItem';
import { SymbolDto } from '@src/api/models/ExchangeInformation';
import { SearchBar } from '@src/components';

const SymbolSelection: FC = () => {
  const { data, isLoading, symbolName, onChangeSearchInput } = SymbolSelectionViewModel();

  const renderItem: ListRenderItem<SymbolDto> = useCallback(
    ({ item }) => <SymbolRowItem item={item} key={`${item.baseAsset}-${item.quoteAsset}`} />,
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <SearchBar value={symbolName} onChangeText={onChangeSearchInput} placeholder="Search" />
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={data?.symbols}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={() => <ActivityIndicator />}
      />
    </View>
  );
};

export { SymbolSelection };

const styles = StyleSheet.create({
  container: tailwind`bg-zinc-900 flex-1`,
  textInputContainer: tailwind`p-4`,
  contentContainerStyle: tailwind`px-2 py-4`,
});
