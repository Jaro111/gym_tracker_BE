const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Exercise = sequelize.define(
  "Exercise",
  {
    name: { type: DataTypes.STRING(30), allowNull: flase },
    weight: { type: DataTypes.INTEGER, defaultValue: 0 },
    reps: { type: DataTypes.INTEGER, defaultValue: 0 },
    sets: { type: DataTypes.INTEGER, defaultValue: 0 },
    setsDone: { type: DataTypes.INTEGER, defaultValue: 0 },
    maxWeight: { type: DataTypes.FLOAT, defaultValue: 0 },
  },
  { timestamps: false }
);

module.exports = Exercise;
