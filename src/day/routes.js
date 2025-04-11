const { Router } = require("express");
const dayRouter = Router();

const { addTrainingDay, getAllTrainingDays } = require("./controller");
const { tokenCheck } = require("../middleware/auth");

// Add training day
dayRouter.post("/day/addTrainingDay", addTrainingDay);

// Get training day
dayRouter.get("/day/getAllTrainingDays", tokenCheck, getAllTrainingDays);

module.exports = dayRouter;
