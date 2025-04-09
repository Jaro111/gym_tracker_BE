const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.AWS_URI,
  username: "admin",
  password: process.env.DB_PASSWORD,
  database: "gym_tracker",
});

sequelize.authenticate();
console.log("DataBase connection is working...");

module.exports = sequelize;
