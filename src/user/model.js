const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define(
  "User",
  {
    username: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(60), allowNull: false },
    role: {
      type: DataTypes.STRING(10),
      defaultValue: "user",
    },
  },
  { timestamps: false }
);

module.exports = User;
