import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error),
);

Axios.interceptors.response.use(
  (resp: AxiosResponse) => {
    if (
      resp.data.status !== 0 &&
      !resp.request.responseURL.includes('download')
    ) {
      message.error(resp.data.message);
      return Promise.reject();
    }
    return resp;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      message.error(error.response.data.message, 2, () =>
        location.replace('/login'),
      );
    }
    return Promise.reject(error);
  },
);

export default Axios;
