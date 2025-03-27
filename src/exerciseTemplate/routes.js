const { Router } = require("express");

const exerciseTemplateRouter = Router();

const { addExerciseTemplate } = require("./controller");

exerciseTemplateRouter.post(
  "/exercises/addExerciseTemplate",
  addExerciseTemplate
);

module.exports = exerciseTemplateRouter;
