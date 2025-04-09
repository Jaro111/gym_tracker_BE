const { Router } = require("express");

const { addExampleExercise, getAllExampleExerises } = require("./controller");
const { tokenCheck } = require("../middleware/auth");

const exampleExerciseRouter = Router();

exampleExerciseRouter.post(
  "/example/addExampleExercise",
  tokenCheck,
  addExampleExercise
);

exampleExerciseRouter.get(
  "/example/getAllExampleExerises",
  getAllExampleExerises
);

module.exports = exampleExerciseRouter;
