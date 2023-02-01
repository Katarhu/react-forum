import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./user/user.slice";
import modalReducer from "./modal/modal.slice";


const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
});

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
