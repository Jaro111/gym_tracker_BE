const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const ExerciseTemplate = sequelize.define(
  "ExerciseTemplate",
  {
    no: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING(50), allowNull: false },
    sets: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    reps: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Planned sets
    repsFrom: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    repsTo: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    maxWeight: { type: DataTypes.FLOAT, allowNull: true },
    lastWeight: { type: DataTypes.FLOAT, allowNull: true },
    category: { type: DataTypes.STRING(20), allowNull: false },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Trainings", key: "id" },
    },
  },
  { timestamps: false }
);

module.exports = ExerciseTemplate;
