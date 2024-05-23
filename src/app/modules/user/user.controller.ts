import httpStatus from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";
import { sendResponse } from "../../../shared/sendResponse";
import { Request, Response } from "express";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...user } = req.body;

  const result = await UserService.createUser(user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created Successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await UserService.loginUser(loginData);
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in Successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
  loginUser,
};
