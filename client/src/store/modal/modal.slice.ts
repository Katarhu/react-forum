import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    isDiscardChangesModal: true,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openDiscardChangesModal: (state) => ({ ...state, isDiscardChangesModal: true }),
        closeDiscardChangesModal: (state) => ({ ...state, isDiscardChangesModal: false }),


    },
});

export default modalSlice.reducer;