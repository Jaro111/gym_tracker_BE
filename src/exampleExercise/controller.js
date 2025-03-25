const exampleExercise = require("./model");

const addExampleExercise = async (req, res) => {
  try {
    const exercise = await exampleExercise.create({
      name: req.body.name,
    });

    res.status(200).json({ message: "Exercise cxreated", exercise: exercise });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addExampleExercise };
