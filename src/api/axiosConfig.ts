import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { mockResponses } from "../mock/mockData";

const baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://27f6-112-122-203-177.ngrok-free.app";
const useMockApi = import.meta.env.VITE_USE_MOCK_API === "true";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

// Mock API interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (useMockApi) {
      const { method, url } = config;
      if (url && url in mockResponses) {
        console.log(`[MOCK API] ${method?.toUpperCase()} ${url}`);
        return Promise.reject({
          config,
          response: {
            status: 200,
            statusText: "OK",
            data: mockResponses[url as keyof typeof mockResponses],
            headers: {},
            config,
          },
        });
      } else {
        console.error(`[MOCK API] No mock data found for ${url}`);
        return Promise.reject({
          config,
          response: { status: 404, statusText: "Not Found", data: "Not Found" },
        });
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle mock responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.config && error.response && useMockApi) {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

// Add request interceptor for logging and token
axiosInstance.interceptors.request.use(
  (config) => {
    if (import.meta.env.VITE_ENV === "dev") {
      console.log(`Calling API: ${config.url}`);
      if (config.params) {
        console.log("Params:", config.params);
      }
    }

    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
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
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Here you would typically refresh the token
      // For now, we'll just logout the user
      localStorage.removeItem("access_token");
    //   window.location.href = "/web-app/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
