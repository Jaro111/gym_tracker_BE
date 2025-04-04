const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Set = sequelize.define(
  "Set",
  {
    reps: { type: DataTypes.INTEGER, defaultValue: 0 },
    weight: { type: DataTypes.FLOAT, defaultValue: 0 },
    exerciseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Exercises", key: "id" },
    },
  },
  { timestamp: false }
);

module.exports = Set;
