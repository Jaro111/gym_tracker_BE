const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Training = sequelize.define(
  "Training",
  {
    name: { type: DataTypes.STRING(20), allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

module.exports = Training;
