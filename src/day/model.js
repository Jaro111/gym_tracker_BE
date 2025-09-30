const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Day = sequelize.define(
  "Day",
  {
    trainingName: { type: DataTypes.STRING, allowNull: true },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" },
    },
    color: { type: DataTypes.STRING, allowNull: false },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Day;
