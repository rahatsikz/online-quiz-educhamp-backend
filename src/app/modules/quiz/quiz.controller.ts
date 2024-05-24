import httpStatus from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { QuizService } from "./quiz.service";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Quizzes fetched successfully",
    data: result,
  });
});

export const QuizController = {
  getAllFromDB,
};
