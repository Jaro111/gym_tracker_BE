const { DataTypes } = require("sequelize");
const ExerciseCategoryLink = require("./model");

// Add Exrcise To Category

const addCategoryLink = async (req, res) => {
  try {
    const { exerciseId, categoryId } = req.body;
    const exerciseCategory = await ExerciseCategoryLink.create({
      exerciseId: exerciseId,
      categoryId: categoryId,
    });

    res.status(200).json({
      message: "Created exercise with category",
      exerciseCategory: exerciseCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

module.exports = { addCategoryLink };
