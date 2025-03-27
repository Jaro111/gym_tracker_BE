const { Router } = require("express");

const categoryLinkRouter = Router();

const { addCategoryLink } = require("./controller");

// Add axercise with category
categoryLinkRouter.post("/example/addExerciseCategory", addCategoryLink);

module.exports = categoryLinkRouter;
