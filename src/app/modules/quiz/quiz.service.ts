import { IQuiz } from "./quiz.interface";
import { Quiz } from "./quiz.model";

const getAllFromDB = async (): Promise<IQuiz[]> => {
  const result = await Quiz.find({});
  return result;
};

export const QuizService = {
  getAllFromDB,
};
