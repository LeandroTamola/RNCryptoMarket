import ENV from 'react-native-config';

const defaultConfig = {
  baseURL: ENV.API_BASE_URL,
  timeout: 10000,
};

const authenticatedConfig = {
  baseURL: ENV.API_BASE_URL,
  timeout: 10000,
  headers: {
    'X-MBX-APIKEY': ENV.BINANCE_API_KEY,
  },
};

export const ApiConfig = {
  defaultConfig,
  authenticatedConfig,
};
