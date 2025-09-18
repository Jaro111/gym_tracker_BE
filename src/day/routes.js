const { Router } = require("express");
const dayRouter = Router();

const {
  addTrainingDay,
  getAllTrainingDays,
  deleteTrainingDay,
} = require("./controller");
const { tokenCheck } = require("../middleware/auth");

// Add training day
dayRouter.post("/day/addTrainingDay", tokenCheck, addTrainingDay);

// Get training day
dayRouter.get("/day/getAllTrainingDays", tokenCheck, getAllTrainingDays);

// Delete training Day
dayRouter.delete("/day/deleteTrainingDay", tokenCheck, deleteTrainingDay);

module.exports = dayRouter;
