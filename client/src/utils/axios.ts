import axios, {AxiosHeaders, AxiosRequestConfig} from 'axios';
import {environment} from "../environment";

const instance = axios.create({
    baseURL: environment.baseApiUrl,
});

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${localStorage.getItem(environment.tokenKey)}`);

    return config;
});

export default instance;
