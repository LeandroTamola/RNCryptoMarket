import axios from 'axios';
import { ApiConfig } from '../config/config';
import { authInterceptor } from '../interceptors/authInterceptor';

const publicApi = axios.create({ ...ApiConfig.defaultConfig });

const withSignature = axios.create({ ...ApiConfig.authenticatedConfig });

withSignature.interceptors.request.use(authInterceptor as any);

const Api = {
  publicApi,
  withSignature,
};

export default Api;
