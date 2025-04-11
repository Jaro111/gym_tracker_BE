const { Router } = require("express");

const {
  addExampleExercise,
  getAllExampleExerises,
  addMultipleExampleExercises,
} = require("./controller");
const { tokenCheck } = require("../middleware/auth");

const exampleExerciseRouter = Router();

// Add one exercise
exampleExerciseRouter.post(
  "/example/addExampleExercise",
  tokenCheck,
  addExampleExercise
);
// Add multiple
exampleExerciseRouter.post(
  "/example/addMultipleExampleExercises",
  tokenCheck,
  addMultipleExampleExercises
);

// Get all exercises
exampleExerciseRouter.get(
  "/example/getAllExampleExerises",
  getAllExampleExerises
);

module.exports = exampleExerciseRouter;
