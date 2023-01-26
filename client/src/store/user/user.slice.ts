import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {authUser, loginUser, registerUser} from "./user.action.creators";

import {IAuthResponse} from "../../common/types/auth";

import {UserLoadingTypes} from "../../models/user.model";

import {IUserInitialState} from "../../models/user.model";


const initialState: IUserInitialState = {
    user: null,
    token: "token",
    loadingType: "NONE",
    error: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: state => initialState,
        clearAuthError: state => ({ ...state, error: null }),
    },
    extraReducers: {

        // LOGIN

        [loginUser.pending.type]: (state) => {
            state.loadingType = UserLoadingTypes.LOADING_AUTH;
        },
        [loginUser.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loadingType = UserLoadingTypes.NONE;
        },
        [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loadingType = UserLoadingTypes.NONE;
            state.error = action.payload;
        },

        // REGISTRATION

        [registerUser.pending.type]: (state) => {
            state.loadingType = UserLoadingTypes.LOADING_AUTH;
        },
        [registerUser.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loadingType = UserLoadingTypes.NONE;
        },
        [registerUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loadingType = UserLoadingTypes.NONE;
            state.error = action.payload;
        },

        // AUTHENTICATION WITH TOKEN

        [authUser.pending.type]: (state) => {
            state.loadingType = UserLoadingTypes.LOADING_TOKEN_AUTH;
        },
        [authUser.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loadingType = UserLoadingTypes.NONE;
        },
        [authUser.rejected.type]: (state) => {
            state.loadingType = UserLoadingTypes.NONE;
        },
    }
});

export default userSlice.reducer;
export const { logout, clearAuthError } = userSlice.actions;
