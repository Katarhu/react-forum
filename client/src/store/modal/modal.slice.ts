import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IModalInitialState} from "./modal.types";
import {IDiscardChangesModalProps} from "../../components/DiscardChangesModal/DiscardChangesModal";


const initialState: IModalInitialState = {
    discardModal: { isActive: false, props: null },
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openDiscardChangesModal: (state, action: PayloadAction<IDiscardChangesModalProps>) => {
            state.discardModal.isActive = true;
            state.discardModal.props = action.payload;
        },
        closeDiscardChangesModal: (state) => {
            state.discardModal.isActive = false;
            state.discardModal.props = null;
        },


    },
});

export default modalSlice.reducer;

export const {
    closeDiscardChangesModal,
    openDiscardChangesModal
} = modalSlice.actions;