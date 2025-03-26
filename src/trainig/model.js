const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Training = sequelize.define(
  "Training",
  {
    trainingName: { type: DataTypes.STRING, allowNull: true },
    name: { type: DataTypes.STRING(20), allowNull: false },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" },
    },
  },
  { timestamps: false }
);

module.exports = Training;
