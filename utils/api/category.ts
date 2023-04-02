import { AxiosRequestConfig } from 'axios';
import apiAxios from './request';

export async function getAllCategoriesReq(config?: AxiosRequestConfig) {
    return apiAxios.get(`/category`, config);
}
