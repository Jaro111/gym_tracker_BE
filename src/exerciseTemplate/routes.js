const { Router } = require("express");

const exerciseTemplateRouter = Router();

const {
  addExerciseTemplate,
  getAllExerciseTemplate,
  updateExercise,
  deleteExercise,
  getSetCountByCategory,
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
// get Set Count By category
exerciseTemplateRouter.get(
  "/exercises/getSetCount/:idString",
  tokenCheck,
  getSetCountByCategory
);

module.exports = exerciseTemplateRouter;
