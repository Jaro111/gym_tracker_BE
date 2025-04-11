const exampleExercise = require("./model");

// Add example exercise
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
//Add multiple
const addMultipleExampleExercises = async (req, res) => {
  const { exercises } = req.body;

  try {
    const exerciseData = exercises.map((ex) => ({
      name: ex.name,
      category: ex.category,
      userId: req.authCheck.id,
    }));
    const createdExercises = await exampleExercise.bulkCreate(exerciseData, {
      validate: true, // Ensures constraints (e.g., unique name)
      ignoreDuplicates: false, // Fails if duplicate name exists (due to unique: true)
    });

    console.log(createdExercises);
    const exampleExercises = await exampleExercise.findAll();
    res.status(200).json({ message: "Data Uploaded", data: exampleExercises });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
// Get all data
const getAllExampleExerises = async (req, res) => {
  try {
    const exampleExercises = await exampleExercise.findAll();

    res.status(200).json({ message: "Data Uploaded", data: exampleExercises });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addExampleExercise,
  getAllExampleExerises,
  addMultipleExampleExercises,
};
