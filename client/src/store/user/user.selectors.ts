import {createDraftSafeSelector, createSelector} from "@reduxjs/toolkit";
import {RootState} from "../index";


const selectFeature = (state: RootState) => state.user;

export const selectIsAuth = createSelector(selectFeature, (state) => !!state.token);
export const selectUser = createSelector(selectFeature, (state) => state.user);
export const selectUserLoading = createSelector(selectFeature, (state) => state.loadingType);
export const selectAuthError = createDraftSafeSelector(selectFeature, (state) => state.error);
