const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Series = sequelize.define(
  "Training",
  {
    qty: { type: DataTypes.INTEGER(20), defaultValue: 0 },
  },
  { timestamps: false }
);

module.exports = Series;
