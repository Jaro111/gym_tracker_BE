const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Day = sequelize.define(
  "Day",
  {
    date: { type: DataTypes.DATEONLY, allowNull: false, unique: true },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Trainings", key: "id" },
    },
  },
  { timestamps: false }
);

module.exports = Day;
