import axios, {AxiosHeaders, AxiosRequestConfig} from 'axios';
import {environment} from "../environment";

const instance = axios.create({
    baseURL: environment.baseApiUrl,
});

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
    config.headers = {...config.headers} as AxiosHeaders
    config.headers.set("Authorization", `Bearer ${localStorage.getItem('token')}`)

    return config;
});

export default instance;
