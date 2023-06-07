import ENV from 'react-native-config';

const defaultConfig = {
  baseURL: ENV.API_BASE_URL,
  timeout: 10000,
};

export const ApiConfig = {
  defaultConfig,
};
