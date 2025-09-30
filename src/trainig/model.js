const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Training = sequelize.define(
  "Training",
  {
    name: { type: DataTypes.STRING(20), allowNull: false },
    color: { type: DataTypes.STRING(20), defaultValue: "green" },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" },
    },
  },
  { timestamps: false }
);

module.exports = Training;
