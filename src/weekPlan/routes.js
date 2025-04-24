const { Router } = require("express");

const weekPlanRouter = Router();

const {
  addTrainingToPlan,
  getWeekPlan,
  removeTraining,
} = require("./controllers");
const { tokenCheck } = require("../middleware/auth");

// add training to weekPlan
weekPlanRouter.post("/weekPlan/addTraining", tokenCheck, addTrainingToPlan);

// getWeekPlan
weekPlanRouter.get("/weekPlan/getPlan", tokenCheck, getWeekPlan);

// remove Training
weekPlanRouter.delete("/weekPlan/removeTraining", tokenCheck, removeTraining);
module.exports = weekPlanRouter;
