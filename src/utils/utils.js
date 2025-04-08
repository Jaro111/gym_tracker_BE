const sequelize = require("../db/connection");

const resetTables = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates tables
    console.log("Database reset successful!");
  } catch (error) {
    console.error("Reset failed:", error);
  }
};

module.exports = resetTables;
