import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    scores: {
      type: [Number],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.methods.isUserExists = async function (email, withPassword = false) {
  const projection = withPassword
    ? { _id: 1, name: 1, email: 1, password: 1 }
    : { _id: 1, name: 1, email: 1, password: 0 };
  return await User.findOne({ email }, projection);
};

userSchema.methods.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
) {
  return await bcrypt.compare(givenPassword, savedPassword);
};

export const User = model<IUser, UserModel>("User", userSchema);
