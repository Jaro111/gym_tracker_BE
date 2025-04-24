const Training = require("./model");

const addTraining = async (req, res) => {
  try {
    const { name } = req.body;

    const training = await Training.create({
      name: name,
      userId: req.authCheck.id,
    });

    res.status(200).json({ message: "Training created", training: training });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
// Delete training
const deleteTraining = async (req, res) => {
  try {
    const { name } = req.body;

    const training = await Training.destroy({
      where: {
        name: name,
        userId: req.authCheck.id,
      },
    });

    const trainings = await Training.findAll({
      where: { userId: req.authCheck.id },
    });

    res.status(200).json({ message: "Training deleted", trainings: trainings });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

//get training by id
const getTrainingById = async (req, res) => {
  console.log("stra");
  const { id } = req.params;
  try {
    const training = await Training.findOne({
      where: { id: id, userId: req.authCheck.id },
    });
    console.log(training);
    res.status(200).json({ message: "Training uploaded", training: training });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
// getAll userTrainings
const getAllUserTrainings = async (req, res) => {
  try {
    const trainings = await Training.findAll({
      where: { userId: req.authCheck.id },
    });

    res
      .status(200)
      .json({ message: "Trainings uploaded", trainings: trainings });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
// getKeys and Values of Training
const getTrainingNamesAndIds = async (req, res) => {
  try {
    const data = await Training.findAll({
      where: { userId: req.authCheck.id },
    });

    const trainings = {};

    data.map((item) => {
      trainings[item.id] = item.name;
    });

    res
      .status(200)
      .json({ message: "Trainings uploaded", trainings: trainings });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addTraining,
  getTrainingById,
  getAllUserTrainings,
  deleteTraining,
  getTrainingNamesAndIds,
};
