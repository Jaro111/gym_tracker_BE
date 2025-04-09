const { Router } = require("express");

const { addExampleExercise, getAllExerciseCategory } = require("./controller");
const { tokenCheck } = require("../middleware/auth");

const exampleExerciseRouter = Router();

exampleExerciseRouter.post(
  "/example/addExampleExercise",
  tokenCheck,
  addExampleExercise
);

exampleExerciseRouter.get(
  "/example/getAllExerciseCategory",
  getAllExerciseCategory
);

module.exports = exampleExerciseRouter;
