const ExerciseTemplate = require("./model");

// Add exercise Template
const addExerciseTemplate = async (req, res) => {
  try {
    const { name, sets, reps, trainingId, setsFrom, setsTo, category } =
      req.body;

    const exerciseTemplate = await ExerciseTemplate.findAll({
      where: { trainingId: trainingId },
    });
    let no = 0;
    if (!exerciseTemplate) {
      no = 1;
    } else {
      no = exerciseTemplate.length + 1;
    }
    const exerise = await ExerciseTemplate.create({
      no: no,
      name: name,
      sets: sets,
      reps: reps,
      repsFrom: setsFrom,
      repsTo: setsTo,
      category: category,
      trainingId: trainingId,
    });

    res.status(200).json({ message: "Template created", exercise: exerise });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
// Update exercise template sets reps

const updateExercise = async (req, res) => {
  try {
    const { choice, sets, reps, id, trainingId, repsFrom, repsTo } = req.body;

    const exercise = await ExerciseTemplate.findOne({
      where: { id: id, trainingId: trainingId },
    });
    const updatedExercise = await exercise.update({ sets: sets });

    //
    if (choice === "reps") {
      const updatedExercise = await exercise.update({
        reps: reps,
        repsFrom: 0,
        repsTo: 0,
      });
      res.status(200).json({
        message: "Exercises updated",
        updatedExercise: updatedExercise,
      });
    }
    //
    if (choice === "fromTo") {
      const updatedExercise = await exercise.update({
        reps: 0,
        repsFrom: repsFrom,
        repsTo: repsTo,
      });
      res.status(200).json({
        message: "Exercises updated",
        updatedExercise: updatedExercise,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Delete exercise

const deleteExercise = async (req, res) => {
  try {
    const { id, trainingId } = req.body;
    const exerciseToDelete = await ExerciseTemplate.findOne({
      where: { id: id, trainingId: trainingId },
    });

    await ExerciseTemplate.destroy({
      where: { id: id, trainingId: trainingId },
    });
    res.status(200).json({
      message: "Exercises deleted",
      data: exerciseToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllExerciseTemplate = async (req, res) => {
  try {
    const { trainingId } = req.params;
    const exercises = await ExerciseTemplate.findAll({
      where: { trainingId: trainingId },
    });

    res
      .status(200)
      .json({ message: "Exercises uploaded", exercises: exercises });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getSetCountByCategory = async (req, res) => {
  try {
    const { idString } = req.params;
    console.log("dupa");
    console.log("String", idString);
    console.log("STRING", idString);
    const idArray = idString.split(",");
    console.log(idArray);
    // const idNumberArray = [];
    // idArray.map((item) => {
    //   idNumberArray.push(Number(item));
    // });

    const allWeekExercises = await ExerciseTemplate.findAll({
      where: { trainingId: idArray },
    });
    let nChest = 0;
    let nLegs = 0;
    let nBack = 0;
    let nCore = 0;
    let nBiceps = 0;
    let nTriceps = 0;
    let nShoulders = 0;

    const chest = allWeekExercises.map((item, index) => {
      if (item.category === "Chest") {
        nChest = nChest + item.sets;
      } else if (item.category === "Legs") {
        nLegs = nLegs + item.sets;
      } else if (item.category === "Back") {
        nBack = nBack + item.sets;
      } else if (item.category === "Core") {
        nCore = nCore + item.sets;
      } else if (item.category === "Biceps") {
        nBiceps = nBiceps + item.sets;
      } else if (item.category === "Triceps") {
        nTriceps = nTriceps + item.sets;
      } else if (item.category === "Shoulders") {
        nShoulders = nShoulders + item.sets;
      }
    });

    const categoryCount = [
      { category: "Chest", sets: nChest },
      { category: "Legs", sets: nLegs },
      { category: "Back", sets: nBack },
      { category: "Core", sets: nCore },
      { category: "Biceps", sets: nBiceps },
      { category: "Triceps", sets: nTriceps },
      { category: "Shoulders", sets: nShoulders },
    ];

    res.status(200).json({
      message: "Stats uploaded",
      setsCount: categoryCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addExerciseTemplate,
  getAllExerciseTemplate,
  updateExercise,
  deleteExercise,
  getSetCountByCategory,
};
