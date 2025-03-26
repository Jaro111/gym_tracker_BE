const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Day = sequelize.define(
  "Day",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" },
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Day;
