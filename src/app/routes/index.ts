import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { QuizRoutes } from "../modules/quiz/quiz.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/quizzes",
    route: QuizRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
