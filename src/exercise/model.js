const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Exercise = sequelize.define(
  "Exercise",
  {
    templateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "ExerciseTemplates", key: "id" },
    },
    dayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Days", key: "id" },
    },
    createdAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Exercise;
