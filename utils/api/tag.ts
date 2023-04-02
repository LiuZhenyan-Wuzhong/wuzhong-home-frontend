import { AxiosRequestConfig } from 'axios';
import apiAxios from './request';

export async function getAllTagsReq(config?: AxiosRequestConfig) {
    return apiAxios.get(`/tag`, config);
}
