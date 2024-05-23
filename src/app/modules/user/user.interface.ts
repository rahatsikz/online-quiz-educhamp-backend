import { Document, Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  scores?: number[];
};

export interface IUserMethods {
  isUserExists(
    email: string,
    withPassword?: boolean
  ): Promise<(Document<unknown, {}, IUser> & IUser & { _id: string }) | null>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
}

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
