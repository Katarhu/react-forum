import {IUserInitialState} from "../../models/user.model";
import {createSlice} from "@reduxjs/toolkit";


const initialState: IUserInitialState = {
    user: null,
    token: null,
    loadingType: "NONE",
    error: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: {

    }
});

export default userSlice.reducer;
