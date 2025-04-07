const { Router } = require("express");

const trainingRouter = Router();

const {
  addTraining,
  getTrainingById,
  getAllUserTrainings,
} = require("./controller");
const { tokenCheck } = require("../middleware/auth");

// add training
trainingRouter.post("/training/addTraining", tokenCheck, addTraining);

// get training
trainingRouter.get("/training/getTraining/:id", tokenCheck, getTrainingById);

// get all user trainings
trainingRouter.get(
  "/training/getAllTrainings",
  tokenCheck,
  getAllUserTrainings
);
module.exports = trainingRouter;
