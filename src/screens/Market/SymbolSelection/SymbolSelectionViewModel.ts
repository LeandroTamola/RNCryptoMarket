import { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useGetExchangeInformation } from '@src/api/queries/market/ExchangeInformation/hooks/useGetExchangeInformation';
import { useOrderContext } from '@src/context/OrderContext';
import { useDebounce } from '@src/hooks';
import { RootNavigatorProps } from '@src/navigation/RootNavigator/types';

const SymbolSelectionViewModel = () => {
  const [symbolName, setSymbolName] = useState<string>();
  const debouncedSymbolName = useDebounce(symbolName);
  const { data, isLoading } = useGetExchangeInformation();
  const { setOrder } = useOrderContext();
  const navigation = useNavigation<RootNavigatorProps>();

  const filteredSymbols = useMemo(() => {
    if (isLoading || !data) return [];
    return debouncedSymbolName
      ? data.symbols.filter((item) => item.symbol.includes(debouncedSymbolName))
      : data.symbols;
  }, [debouncedSymbolName, isLoading, data]);

  const onChangeSearchInput = (value: string) => {
    setSymbolName(value);
  };

  const onSymbolPress = (symbol: string) => {
    setOrder(symbol);
    navigation.canGoBack() && navigation.goBack();
  };

  return { symbols: filteredSymbols, isLoading, symbolName, onChangeSearchInput, onSymbolPress };
};

export { SymbolSelectionViewModel };
