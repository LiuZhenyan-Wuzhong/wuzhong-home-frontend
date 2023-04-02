import { AxiosRequestConfig } from 'axios';
import apiAxios from './request';

export async function getAllArticleIdsReq(config?: AxiosRequestConfig) {
  return apiAxios.get('/article/ids', config);
}

export async function getAllArticlesReq(config?: AxiosRequestConfig) {
  return apiAxios.get('/article', config);
}

export async function getArticleByIdReq(id: string, config?: AxiosRequestConfig) {
  return apiAxios.get(`/article/${id}`, config);
}

async function getConditionalArticlesReq(
  {
    conditions,
    projection,
    options
  }: {
    conditions?: any;
    projection?: any;
    options?: any;
  },
  config?: AxiosRequestConfig
) {
  // const cookie = config?.headers?.cookie ||

  return apiAxios.post(
    `/article/condition`,
    {
      conditions,
      projection,
      options
    },
    config
  );
}

export async function get10ArticlesReq(config?: AxiosRequestConfig) {
  return getConditionalArticlesReq(
    {
      options: {
        limit: 10
      }
    },
    config
  );
}

export async function getUserArticlesReq(id: string, count?: number, config?: AxiosRequestConfig) {
  return getConditionalArticlesReq(
    {
      conditions: {
        author: id
      },
      options: {
        limit: count
      }
    },
    config
  );
}

export async function addArticlesReq(config?: AxiosRequestConfig) {
  return apiAxios.post('/article', config);
}

export async function clapArticleReq(
  { articleId }: { articleId: string },
  config?: AxiosRequestConfig
) {
  return apiAxios.post(
    '/article/clap',
    {
      articleId
    },
    config
  );
}

export async function commentArticleReq(
  {
    articleId,
    comment
  }: {
    articleId: string;
    comment: string;
  },
  config?: AxiosRequestConfig
) {
  return apiAxios.post(
    '/article/comment',
    {
      articleId,
      comment
    },
    config
  );
}
