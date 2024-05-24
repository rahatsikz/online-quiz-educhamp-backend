import express from "express";
import { QuizController } from "./quiz.controller";

const router = express.Router();

router.get("/", QuizController.getAllFromDB);

export const QuizRoutes = router;
