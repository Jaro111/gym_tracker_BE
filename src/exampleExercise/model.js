const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const ExampleExercise = sequelize.define(
  "exampleExercise",
  {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    category: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: "Users", key: "id" },
    },
  },
  { timestamps: false }
);

module.exports = ExampleExercise;
