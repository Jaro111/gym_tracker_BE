require("dotenv").config();
const sequelize = require("./db/connection");
const cors = require("cors");
const express = require("express");
const userRouter = require("./user/routes");
const exampleExerciseRouter = require("./exampleExercise/routes");
const trainingRouter = require("./trainig/routes");
const exerciseTemplateRouter = require("./exerciseTemplate/routes");
const dayRouter = require("./day/routes");
const User = require("./user/model");
const Training = require("./trainig/model");
const Day = require("./day/model");
const ExerciseTemplate = require("./exerciseTemplate/model");
const Exercise = require("./exercise/model");
const Set = require("./set/model");
const ExampleExercise = require("./exampleExercise/model");
const ExampleCategory = require("./exampleCategory/model");
const ExerciseCategoryLink = require("./categoryLink/model");

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(dayRouter);
app.use(trainingRouter);
app.use(exerciseTemplateRouter);
app.use(exampleExerciseRouter);

const SyncTables = async () => {
  try {
    // User relationships
    User.hasMany(Training, { foreignKey: "userId" });
    Training.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(Day, { foreignKey: "userId" });
    Day.belongsTo(User, { foreignKey: "userId" });

    // Training relationships
    Training.hasMany(ExerciseTemplate, { foreignKey: "trainingId" });
    ExerciseTemplate.belongsTo(Training, { foreignKey: "trainingId" });

    // Day relationships
    Day.hasMany(Exercise, { foreignKey: "dayId" });
    Exercise.belongsTo(Day, { foreignKey: "dayId" });

    // Exercise relationships
    Exercise.hasMany(Set, { foreignKey: "exerciseId" });
    Set.belongsTo(Exercise, { foreignKey: "exerciseId" });

    // ExampleExercise relations
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
    await Day.sync();
    await ExerciseTemplate.sync();
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
