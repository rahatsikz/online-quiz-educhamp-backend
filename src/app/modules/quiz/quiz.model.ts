import { Schema, model } from "mongoose";
import { IQuiz, QuizModel } from "./quiz.interface";

const quizSchema = new Schema<IQuiz, QuizModel>(
  {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    correct_answer: {
      type: String,
      required: true,
    },
    difficulty_level: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Quiz = model<IQuiz, QuizModel>("Quiz", quizSchema);
