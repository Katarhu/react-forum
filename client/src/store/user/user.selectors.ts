import {createDraftSafeSelector, createSelector} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {UserRoles} from "../../models/user.model";


const selectFeature = (state: RootState) => state.user;

export const selectIsAuth = createSelector(selectFeature, (state) => !!state.token);
export const selectIsUserAdmin = createSelector(selectFeature, (state) => state.user?.role === UserRoles.ADMIN);
export const selectUser = createSelector(selectFeature, (state) => state.user);
export const selectUserLoading = createSelector(selectFeature, (state) => state.loadingType);
export const selectAuthError = createDraftSafeSelector(selectFeature, (state) => state.error);
