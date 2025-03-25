const { Router } = require("express");
const dayRouter = Router();

const { addTrainingDay } = require("./controller");

dayRouter.post("/day/addTrainingDay", addTrainingDay);

module.exports = dayRouter;
