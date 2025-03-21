const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Training = sequelize.define(
  "Training",
  {
    name: { type: DataTypes.STRING(20), allowNull: false },
  },
  { timestamps: false }
);

module.exports = Training;
