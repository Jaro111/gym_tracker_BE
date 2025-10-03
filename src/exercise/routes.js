const { Router } = require("express");

const { getTrainingByDate, getAllExercisesAndDays } = require("./controller");
const { tokenCheck } = require("../middleware/auth");

const exerciseRouter = Router();

exerciseRouter.get(
  "/exercises/getExercisesByDate/:date",
  tokenCheck,
  getTrainingByDate
);

exerciseRouter.get(
  "/exercises/getAllExercisesAndDays",
  tokenCheck,
  getAllExercisesAndDays
);

module.exports = exerciseRouter;

// Add exercise
