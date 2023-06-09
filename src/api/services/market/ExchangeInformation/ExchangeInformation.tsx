import api from '@src/api/instances/api';
import { AxiosResponse } from 'axios';

import { ExchangeInfoDto } from '@src/api/models/ExchangeInformation';

const RESOURSES = {
  EXCHANGE_INFO: '/api/v3/exchangeInfo',
};

const getExchangeInfo = async (symbolName?: string): Promise<ExchangeInfoDto> => {
  // const { data } = await api.get<string, AxiosResponse<ExchangeInfoDto>>(RESOURSES.EXCHANGE_INFO, {
  //   params: symbolName ? { symbol: symbolName } : {},
  // });
  // return data;
  return null;
};

export const ExchangeInfoServices = {
  getExchangeInfo,
};
