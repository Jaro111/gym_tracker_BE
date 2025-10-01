const { Router } = require("express");

const trainingRouter = Router();

const {
  addTraining,
  getTrainingById,
  getAllUserTrainings,
  deleteTraining,
  getTrainingNamesAndIds,
  updateTrainingColor,
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
// delete Training
trainingRouter.delete("/training/deleteTraining", tokenCheck, deleteTraining);
// getKeys and Values of Training
trainingRouter.get(
  "/training/getTrainingNamesAndIds",
  tokenCheck,
  getTrainingNamesAndIds
);
// Update training Color
trainingRouter.put("/training/updateColor", tokenCheck, updateTrainingColor);

module.exports = trainingRouter;
