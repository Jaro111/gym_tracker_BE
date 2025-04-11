const { Router } = require("express");

const exerciseTemplateRouter = Router();

const { addExerciseTemplate, getAllExerciseTemplate } = require("./controller");
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

module.exports = exerciseTemplateRouter;
