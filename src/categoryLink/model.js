const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const ExerciseCategoryLink = sequelize.define(
  "ExerciseCategoryLink",
  {
    exerciseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "ExampleExercises", key: "id" },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "ExampleCategories", key: "id" },
    },
  },
  { timestamps: false }
);

module.exports = ExerciseCategoryLink;
