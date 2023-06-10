import { AxiosRequestConfig } from 'axios';
import ENV from 'react-native-config';
import CryptoJS from 'crypto-js';
import queryString from 'query-string';

export const authInterceptor = async (config: AxiosRequestConfig) => {
  const timestamp = new Date().getTime();
  const query = queryString.stringify({ ...config.params, timestamp });
  const signature = CryptoJS.HmacSHA256(query, ENV.BINANCE_SECRET_KEY).toString(CryptoJS.enc.Hex);

  config.params = { ...queryString.parse(query), signature };

  return config;
};
