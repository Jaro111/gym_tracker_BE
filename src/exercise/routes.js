const { Router } = require("express");

const { getTrainingByDate } = require("./controller");

const exerciseRouter = Router();

exerciseRouter.get("/training/getTrainingByDate/:date");

module.exports = exerciseRouter;

// Add exercise
