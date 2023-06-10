import React, { FC, useCallback } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, TouchableOpacity, View } from 'react-native';
import tailwind from 'twrnc';
import { SymbolSelectionViewModel } from './SymbolSelectionViewModel';
import { SymbolRowItem } from './components/SymbolRowItem';
import { SymbolDto } from '@src/api/models/ExchangeInformation';
import { KeyboardAvoidingView, SearchBar, SvgImage } from '@src/components';
import { hitSlop } from '@src/utils/hitslop';

const SymbolSelection: FC = () => {
  const { symbols, isLoading, symbolName, onChangeSearchInput, onSymbolPress, onClosePress } =
    SymbolSelectionViewModel();

  const renderItem: ListRenderItem<SymbolDto> = useCallback(
    ({ item }) => <SymbolRowItem item={item} key={`${item.baseAsset}-${item.quoteAsset}`} onPress={onSymbolPress} />,
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClosePress} hitSlop={hitSlop.mediumHitSlop}>
          <SvgImage name="Cross" width={20} height={20} />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <SearchBar
            value={symbolName}
            onChangeText={onChangeSearchInput}
            placeholder="Search"
            autoCapitalize="characters"
            autoCorrect={false}
          />
        </View>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={symbols}
          renderItem={renderItem}
          refreshing={isLoading}
          onRefresh={() => <ActivityIndicator color="white" />}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export { SymbolSelection };

const styles = StyleSheet.create({
  container: tailwind`bg-zinc-900 flex-1`,
  closeButton: tailwind`self-end mr-4 mt-4`,
  textInputContainer: tailwind`p-4`,
  contentContainerStyle: tailwind`px-2 py-4`,
});
