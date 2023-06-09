import { useGetExchangeInformation } from '@src/api/queries/market/ExchangeInformation/hooks/useGetExchangeInformation';
import mockedData from '@src/api/services/market/ExchangeInformation/MockedExchange.json';
import { useDebounce } from '@src/hooks';
import { useMemo, useState } from 'react';

const SymbolSelectionViewModel = () => {
  const [symbolName, setSymbolName] = useState<string>('');
  const debouncedSymbolName = useDebounce(symbolName);
  const { isLoading } = useGetExchangeInformation(debouncedSymbolName);
  const data = useMemo(() => mockedData, []);

  const onChangeSearchInput = (value: string) => {
    setSymbolName(value);
  };

  return { data, isLoading, symbolName, onChangeSearchInput };
};

export { SymbolSelectionViewModel };
