const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Exercise = sequelize.define(
  "Exercise",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
