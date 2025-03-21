const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Exercise = sequelize.define(
  "Exercise",
  {
    name: { type: DataTypes.STRING(30), allowNull: flase },
    reps: { type: DataTypes.INTEGER, defaultValue: 0 },
    setsDone: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  { timestamps: false }
);

module.exports = Exercise;
