const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.AWS_URI,
  username: "admin",
  password: process.env.DB_PASSWORD,
  database: "gym_tracker",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection successful!");
  } catch (error) {
    console.error("Connection failed:", error);
  }
})();

module.exports = sequelize;
