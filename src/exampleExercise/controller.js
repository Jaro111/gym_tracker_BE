const exampleExercise = require("./model");

const addExampleExercise = async (req, res) => {
  try {
    const { name, category } = req.body;
    const exercise = await exampleExercise.create({
      name: name,
      category: category,
      userId: req.authCheck.id,
    });

    res.status(200).json({ message: "Exercise cxreated", exercise: exercise });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
//
// Get all data
const getAllExampleExerises = async (req, res) => {
  try {
    const exampleExercises = await exampleExercise.findAll();

    res.status(200).json({ message: "Data Uploaded", data: exampleExercises });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addExampleExercise, getAllExampleExerises };
