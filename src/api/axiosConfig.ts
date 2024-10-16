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

    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Here you would typically refresh the token
      // For now, we'll just logout the user
      localStorage.removeItem('access_token');
      window.location.href = '/web-app/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
