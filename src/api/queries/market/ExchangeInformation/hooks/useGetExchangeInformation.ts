import { useQuery } from '@tanstack/react-query';
import { ExchangeInfoDto } from '@src/api/models/ExchangeInformation';
import { ExchangeInfoServices } from '@src/api/services/market/ExchangeInformation/ExchangeInformation';
import { ExchangeInformationKeys } from '../ExchangeInformationKeys';

export const useGetExchangeInformation = () => {
  return useQuery<ExchangeInfoDto>({
    queryKey: [ExchangeInformationKeys.exchangeInformation],
    queryFn: () => ExchangeInfoServices.getExchangeInfo(),
  });
};
