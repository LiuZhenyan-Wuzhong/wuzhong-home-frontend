import axios from 'axios';

const serverSideBaseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

const baseURL = `/api`;

const apiAxios = axios.create({
  baseURL: process.browser ? baseURL : serverSideBaseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export default apiAxios;

// export function getValueFromCookie(targetKey: string): string | null {
//     console.log(document.cookie);

//     const subCookies = document.cookie.split(';');
//     for (let i = 0; i < subCookies.length; i++) {
//         const [key, val] = subCookies[i].trim().split('=');
//         if (key === targetKey) {
//             return val;
//         }
//     }
//     return null;
// }

apiAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // console.error(error);

    if (error.response && error.response.status === 453 && process.browser) {
      console.log('Not Sign in.');

      localStorage.removeItem('Auth');
    }
    return Promise.reject(error);
  }
);
