import axios, { AxiosPromise } from 'axios';

const BASE_URL = 'http://localhost:3000';

export type IResponse<T> = AxiosPromise<T>;

const getInstance = () => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  instance.interceptors.response.use((response) => response.data);
  return instance;
};

export const postData = (requestUrl: string, payload: any): any => {
  return getInstance().post(`${BASE_URL}${requestUrl}`, payload);
};
export const fetchData = (requestUrl: string, params?: {}): any => {
  return getInstance().get(`${BASE_URL}${requestUrl}`, { params });
};
export const changeData = (requestUrl: string, payload: any): any => {
  return getInstance().put(`${BASE_URL}${requestUrl}`, payload);
};

export const delItemData  = (requestUrl: string, payload: any): any => {
return getInstance().delete(`${BASE_URL}${requestUrl}`, {data:{id: payload}});
}; 

