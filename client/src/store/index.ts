import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";


const rootReducer = combineReducers({
    user: userReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"]
