const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const WeekPlan = sequelize.define(
  "WeekPlan",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" },
    },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Trainings", key: "id" },
      unique: true,
    },
  },
  { timestamps: false }
);

module.exports = WeekPlan;
