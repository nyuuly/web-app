import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://27f6-112-122-203-177.ngrok-free.app';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (import.meta.env.VITE_ENV === 'dev') {
      console.log(`Calling API: ${config.url}`);
      if (config.params) {
        console.log('Params:', config.params);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
