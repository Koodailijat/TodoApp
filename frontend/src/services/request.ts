import axios, { AxiosRequestConfig } from 'axios';
import { storageKeys } from '@/constants/storageKeys.ts';

const axiosConfig = {
    baseURL: import.meta.env.VITE_BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

const instance = axios.create(axiosConfig);
const authInstance = axios.create(axiosConfig);

authInstance.interceptors.request.use(
    (axiosRequest) => {
        const accessToken = localStorage.getItem(storageKeys.accessToken);
        if (accessToken) {
            // eslint-disable-next-line no-param-reassign
            axiosRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return axiosRequest;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export async function request(config: AxiosRequestConfig) {
    return instance.request(config);
}

export async function authRequest(config: AxiosRequestConfig) {
    return authInstance.request(config);
}
