import {ObjectValues} from "../common/types";

export const UserRoles = {
    USER: "user",
    ADMIN: "admin",
} as const;


type UserRole = ObjectValues<typeof UserRoles>


export interface IUser {
    id: string;
    email: string;
    username: string;
    role: UserRole;
}

export const UserLoadingTypes = {
    LOADING_AUTH: "LOADING_AUTH",
    LOADING_TOKEN_AUTH: "LOADING_TOKEN_AUTH",
    NONE: "NONE"
} as const;


type UserLoadingType = ObjectValues<typeof UserLoadingTypes>;


export interface IUserInitialState {
    user: IUser | null;
    token: string | null;
    loadingType: UserLoadingType;
    error: string | null;
}
