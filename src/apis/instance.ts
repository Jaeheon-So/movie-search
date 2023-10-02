import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL;
const API_KEY: string = import.meta.env.VITE_API_KEY;

const axiosApi = (url: string) => {
  const instance: AxiosInstance = axios.create({
    baseURL: url,
    params: { apikey: API_KEY },
    timeout: 10000,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = axiosApi(API_BASE_URL);
