const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const ExerciseTemplate = sequelize.define(
  "ExerciseTemplate",
  {
    name: { type: DataTypes.STRING(50), allowNull: false },
    sets: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Planned sets
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Trainings", key: "id" },
    },
  },
  { timestamps: false }
);

module.exports = ExerciseTemplate;
