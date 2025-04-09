const exampleExercise = require("./model");
const ExampleCategory = require("../exampleCategory/model");

const addExampleExercise = async (req, res) => {
  try {
    const { name } = req.body;
    const exercise = await exampleExercise.create({
      name: name,
      userId: req.authCheck.id,
    });

    res.status(200).json({ message: "Exercise cxreated", exercise: exercise });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
//
// Get all data
const getAllExerciseCategory = async (req, res) => {
  try {
    const exerciseCategoriesData = await exampleExercise.findAll({
      include: ExampleCategory,
    });
    console.log(exerciseCategoriesData);

    res
      .status(200)
      .json({ message: "Data Uploaded", data: exerciseCategoriesData });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addExampleExercise, getAllExerciseCategory };
