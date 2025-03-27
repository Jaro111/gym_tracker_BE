const { Router } = require("express");

const categoryRouter = Router();

const { addCategory, getAllCategoriesExercises } = require("./controller");

categoryRouter.post("/example/addCategory", addCategory);

// get all Categories With Exercises
categoryRouter.get(
  "/example/getAllCategoryExercise",
  getAllCategoriesExercises
);

module.exports = categoryRouter;
