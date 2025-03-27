const { Router } = require("express");

const { addExampleExercise } = require("./controller");

const exampleExerciseRouter = Router();

exampleExerciseRouter.post("/example/addExampleExercise", addExampleExercise);

module.exports = exampleExerciseRouter;
