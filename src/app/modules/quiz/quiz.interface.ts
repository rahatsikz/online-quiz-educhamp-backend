import { Model } from "mongoose";

export type IQuiz = {
  question: string;
  options: string[];
  correct_answer: string;
  difficulty_level: number;
  tags: string[];
  message: string;
};

export type QuizModel = Model<IQuiz, Record<string, unknown>>;
