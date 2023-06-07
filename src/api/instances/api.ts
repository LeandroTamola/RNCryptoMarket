import axios from 'axios';
import { ApiConfig } from '../config/config';

const api = axios.create({ ...ApiConfig.defaultConfig });

export default api;
