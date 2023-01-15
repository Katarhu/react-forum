import {ObjectValues} from "../common/types";

export interface IUser {
    id: string;
    email: string;
    username: string;
}

export const UserLoadingTypes = {
    LOADING_USER: "LOADING_USER",
    LOADING_AUTH: "LOADING_AUTH",
    NONE: "NONE"
} as const;


type UserLoadingType = ObjectValues<typeof UserLoadingTypes>;


export interface IUserInitialState {
    user: IUser | null;
    token: string | null;
    loadingType: UserLoadingType;
    error: string | null;
}
