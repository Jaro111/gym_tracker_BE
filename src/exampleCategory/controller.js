const { DataTypes } = require("sequelize");
const ExampleCategory = require("./model");
const ExampleExercise = require("../exampleExercise/model");

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await ExampleCategory.create({ name: name });

    res.status(200).json({ message: "Caretory created", category: category });

    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Get all data
const getAllCategoriesExercises = async (req, res) => {
  try {
    const exerciseCategoriesData = await ExampleCategory.findAll({
      include: ExampleExercise,
    });
    console.log(exerciseCategoriesData);

    res
      .status(200)
      .json({ message: "Data Uploaded", data: exerciseCategoriesData });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addCategory, getAllCategoriesExercises };
