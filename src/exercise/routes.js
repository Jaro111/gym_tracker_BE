const { Router } = require("express");

const { getTrainingByDate } = require("./controller");
const { tokenCheck } = require("../middleware/auth");

const exerciseRouter = Router();

exerciseRouter.get(
  "/exercises/getExercisesByDate/:date",
  tokenCheck,
  getTrainingByDate
);

module.exports = exerciseRouter;

// Add exercise
