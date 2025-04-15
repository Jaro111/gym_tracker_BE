const { Router } = require("express");

const exerciseTemplateRouter = Router();

const {
  addExerciseTemplate,
  getAllExerciseTemplate,
  updateExercise,
  deleteExercise,
} = require("./controller");
const { tokenCheck } = require("../middleware/auth");

// Add exercise
exerciseTemplateRouter.post(
  "/exercises/addExerciseTemplate",
  tokenCheck,
  addExerciseTemplate
);

// GetAll exercises

exerciseTemplateRouter.get(
  "/exercises/getAllExercisesTemplate/:trainingId",
  getAllExerciseTemplate
);

// Update
exerciseTemplateRouter.put(
  "/exercises/updateExercises",
  tokenCheck,
  updateExercise
);
// delete Exercise
exerciseTemplateRouter.delete(
  "/exercises/deleteExercise",
  tokenCheck,
  deleteExercise
);

module.exports = exerciseTemplateRouter;
