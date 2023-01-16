import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "../../utils/axios";

import {ILoginCredentials} from "../../models/login.model";
import {IRegisterCredentials} from "../../models/register.model";
import {IAuthResponse} from "../../common/types/auth";

import {environment} from "../../environment";


export const loginUser = createAsyncThunk(
    "auth/login",
    async (body: ILoginCredentials, thunkApi) => {
        try {
            const { data } = await axios.post<IAuthResponse>("/auth/login", body);

            localStorage.setItem(environment.tokenKey, data.token);

            return data;

        } catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    "user/register",
    async (body: IRegisterCredentials, thunkApi) => {
        try {
            const { data } = await axios.post<IAuthResponse>("/auth/register", body);

            window.localStorage.setItem(environment.tokenKey, data.token);

            return data;
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data.message);
        }
    }
);

export const authUser = createAsyncThunk(
    "user/auth",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.post<IAuthResponse>('/auth');

            const token = window.localStorage.getItem(environment.tokenKey);

            return {...data, token };

        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response.data.message)
        }
    }
);
