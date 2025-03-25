require("dotenv").config();
const sequelize = require("./db/connection");
const cors = require("cors");
const express = require("express");
const userRouter = require("./user/routes");
const exampleExerciseRouter = require("./exampleExercise/routes");
const trainingRouter = require("./trainig/routes");
const User = require("./user/model");
const Training = require("./trainig/model");
const Exercise = require("./exercise/model");
const Set = require("./set/model");
const Day = require("./day/model");
const ExerciseTemplate = require("./exerciseTemplate/model");
const ExampleExercise = require("./exampleExercise/model");
const ExampleCategory = require("./exampleCategory/model");
const ExerciseCategoryLink = require("./categoryLink/model");

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(exampleExerciseRouter);
app.use(trainingRouter);

const SyncTables = async () => {
  try {
    User.hasMany(Training, { foreignKey: "userId" });
    Training.belongsTo(User, { foreignKey: "userId" });

    Training.hasMany(ExerciseTemplate, { foreignKey: "trainingId" });
    ExerciseTemplate.belongsTo(Training, { foreignKey: "trainingId" });

    Training.hasMany(Day, { foreignKey: "trainingId" });
    Day.belongsTo(Training, { foreignKey: "trainingId" });

    ExerciseTemplate.hasMany(Exercise, { foreignKey: "templateId" });
    Exercise.belongsTo(ExerciseTemplate, { foreignKey: "templateId" });

    Day.hasMany(Exercise, { foreignKey: "dayId" });
    Exercise.belongsTo(Day, { foreignKey: "dayId" });

    Exercise.hasMany(Set, { foreignKey: "exerciseId" });
    Set.belongsTo(Exercise, { foreignKey: "exerciseId" });

    User.hasMany(ExampleExercise, { foreignKey: "userId" });
    ExampleExercise.belongsTo(User, { foreignKey: "userId" });

    ExampleExercise.belongsToMany(ExampleCategory, {
      through: ExerciseCategoryLink,
      foreignKey: "exerciseId",
    });
    ExampleCategory.belongsToMany(ExampleExercise, {
      through: ExerciseCategoryLink,
      foreignKey: "categoryId",
    });

    await User.sync();
    await Training.sync();
    await ExerciseTemplate.sync();
    await Day.sync();
    await Exercise.sync();
    await Set.sync();
    await ExampleCategory.sync();
    await ExampleExercise.sync();
    await ExerciseCategoryLink.sync();

    console.log("Tables synced successfully.");
  } catch (error) {
    console.error("Error syncing tables:", error);
  }
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API healthy" });
});

app.listen(port, () => {
  SyncTables();
  console.log(`Server listen on ${port}`);
});
