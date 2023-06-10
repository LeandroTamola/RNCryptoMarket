import ENV from 'react-native-config';

export const WEBSOCKET_BASE_URL = 'wss://stream.binance.com:9443/ws';
export const API_BASE_URL = 'https://testnet.binance.vision';

const defaultConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
};

const authenticatedConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'X-MBX-APIKEY': ENV.BINANCE_API_KEY,
  },
};

export const ApiConfig = {
  defaultConfig,
  authenticatedConfig,
};
