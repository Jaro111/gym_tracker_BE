const { Router } = require("express");

const trainingRouter = Router();

const { addTraining } = require("./controller");

trainingRouter.post("/training/addTraining", addTraining);

module.exports = trainingRouter;
