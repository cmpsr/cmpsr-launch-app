import axios from 'axios';
import authService from '../services/auth.service';
import envService from '../services/env.service';

/**
 * Singleton to make requests to the server
 */
const apiClient = axios.create({
  baseURL: envService.getEnv().VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Add a request interceptor to add the token to the headers
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = authService.getToken();

    if (token) {
      config.headers['x-authorization'] = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
