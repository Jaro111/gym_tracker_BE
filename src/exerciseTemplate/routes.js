const { Router } = require("express");

const exerciseTemplateRouter = Router();

const { addExerciseTemplate } = require("./controller");

exerciseTemplateRouter.post(
  "/training/addExerciseTemplate",
  addExerciseTemplate
);

module.exports = exerciseTemplateRouter;
