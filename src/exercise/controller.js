const Exercise = require("./model");

// Create exercise

const addExercise = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = addExercise;
