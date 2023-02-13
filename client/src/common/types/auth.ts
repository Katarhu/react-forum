import {IUser} from "../../models/user.model";

export interface ResponseError {
    statusCode: number;
    message: string;
}

export interface IAuthResponse {
    user: IUser;
    token: string;
}
