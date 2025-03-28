const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Exercise = sequelize.define(
  "Exercise",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sets: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    setsFrom: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    setsTo: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    reps: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Planned sets
    maxWeight: { type: DataTypes.FLOAT, allowNull: true },
    lastWeight: { type: DataTypes.FLOAT, allowNull: true },
    category: { type: DataTypes.STRING(20), allowNull: false },
    dayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Days", key: "id" },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Exercise;
