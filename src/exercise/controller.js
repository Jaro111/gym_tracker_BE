const Exercise = require("./model");

// Create exercise

const addExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create({
      name: req.body.name,
    });

    res.status(200).json({ message: "Exercise created", exercise: exercise });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = addExercise;
