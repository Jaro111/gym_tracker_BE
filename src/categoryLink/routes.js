const { Router } = require("express");

const categoryLinkRouter = Router();

const { addCategoryLink } = require("./controller");
const { tokenCheck } = require("../middleware/auth");

// Add axercise with category
categoryLinkRouter.post(
  "/example/addExerciseCategory",
  tokenCheck,
  addCategoryLink
);

module.exports = categoryLinkRouter;
