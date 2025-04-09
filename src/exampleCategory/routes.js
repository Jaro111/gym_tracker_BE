const { Router } = require("express");

const categoryRouter = Router();

const { addCategory, getAllCategoriesExercises } = require("./controller");
const { tokenCheck } = require("../middleware/auth");

categoryRouter.post("/example/addCategory", tokenCheck, addCategory);

// get all Categories With Exercises
categoryRouter.get(
  "/example/getAllCategoryExercise",
  tokenCheck,
  getAllCategoriesExercises
);

module.exports = categoryRouter;
