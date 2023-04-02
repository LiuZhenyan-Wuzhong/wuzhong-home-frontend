import { AxiosRequestConfig } from 'axios';
import apiAxios from './request';

export async function signInReq(
  {
    email,
    password,
    rememberMe
  }: {
    email: string;
    password: string;
    rememberMe?: boolean;
  },
  config?: AxiosRequestConfig
) {
  rememberMe = rememberMe === undefined ? false : rememberMe;

  return apiAxios.post(
    '/user/signin',
    {
      email,
      password,
      rememberMe
    },
    config
  );
}

export async function signUpReq(
  {
    email,
    password
  }: {
    email: string;
    password: string;
  },
  config?: AxiosRequestConfig
) {
  const res = apiAxios.post(
    '/user',
    {
      email,
      password
    },
    config
  );

  return res;
}

export async function checkUser(config?: AxiosRequestConfig) {
  const res = apiAxios.get('/user/check/auth', config);

  return res;
}

export async function updateProfileReq(
  {
    name,
    avatorImgUrl
  }: {
    name: string;
    avatorImgUrl: string;
  },
  config?: AxiosRequestConfig
) {
  const res = apiAxios.post(
    '/user/update',
    {
      name,
      avatorImgUrl
    },
    config
  );

  return res;
}

export async function removeReq(config?: AxiosRequestConfig) {
  const res = apiAxios.get('/user/remove/', config);

  return res;
}

export async function signOutReq(config?: AxiosRequestConfig) {
  const res = apiAxios.get('/user/signout', config);

  return res;
}

export async function getAllUserReq(config?: AxiosRequestConfig) {
  const res = apiAxios.get('/user', config);

  return res;
}

export async function getUserByIdReq(id: string, config?: AxiosRequestConfig) {
  const res = apiAxios.get(`/user/${id}`, config);

  return res;
}

export async function getUserByEmail(email: string, config?: AxiosRequestConfig) {
  const res = apiAxios.get(`/email/${email}`, config);
}

export async function getUserProfile(id: string, config?: AxiosRequestConfig) {
  const res = apiAxios.get(`/profile/${id}`, config);
}

export async function followUser(id: string, config?: AxiosRequestConfig) {
  const res = apiAxios.post(
    `/user/follow`,
    {
      id
    },
    config
  );
}
