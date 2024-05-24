import httpStatus from "http-status";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";

const createUser = async (payload: IUser): Promise<IUser> => {
  let { name, email, password } = payload;

  //   const isUserExists = await User.findOne({ email });

  const user = new User();

  const isUserExists = await user.isUserExists(email, true);

  if (isUserExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User already exists");
  }

  password = await bcrypt.hash(password, Number(config.salt_rounds));

  const createdUser = await User.create({ name, email, password });
  return createdUser;
};

const loginUser = async (payload: IUser) => {
  const { email, password: givenPassword } = payload;

  const user = new User();

  const isUserExists = await user.isUserExists(email, true);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  if (
    isUserExists.password &&
    !(await user.isPasswordMatched(givenPassword, isUserExists.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password not matched");
  }

  const { password, ...userWithoutPassword } = isUserExists.toObject();

  // console.log(isUserExists);

  return userWithoutPassword;
};

export const UserService = {
  createUser,
  loginUser,
};
