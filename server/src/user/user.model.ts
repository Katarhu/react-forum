import mongoose from "mongoose";
import * as Joi from 'joi';

export enum UserRole {
  USER="user",
  ADMIN="admin"
}

export interface IUser {
  email: string;
  username: string;
  password: string;
  role: UserRole;
}

export const UserSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true},
  password: { type: String, required: true},
  email: { type: String, required: true },
  role: { type: String, required: true, default: UserRole.USER }
});

// JOI

export const userCredentialsJoi = Joi.object({
  username: Joi.string()
    .required(),
  password: Joi.string()
    .required()
}).options({allowUnknown: true});


export const createUserJoi = Joi.object({
  username: Joi.string()
    .required(),
  password: Joi.string()
    .required(),
  email: Joi.string()
    .email()
    .required(),
}).options({allowUnknown: true});
