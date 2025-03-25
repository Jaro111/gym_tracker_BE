const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const ExampleCategory = sequelize.define(
  "exampleCategory",
  {
    name: { type: DataTypes.STRING(20), allowNull: false },
  },
  { timestamps: false }
);

module.exports = ExampleCategory;
