const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Day = sequelize.define(
  "Day",
  {
    date: { type: DataTypes.DATEONLY, allowNull: false },
  },
  { timestamps: false }
);
