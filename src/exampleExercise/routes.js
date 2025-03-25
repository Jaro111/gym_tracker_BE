const { Router } = require("express");

const { addExampleExercise } = require("./controller");

const exampleExerciseRouter = Router();

exampleExerciseRouter.post("/user/addExampleExercise", addExampleExercise);

module.exports = exampleExerciseRouter;
