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

const getAllExerciseTemplate = async (req, res) => {
  try {
    console.log("dupa");
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

module.exports = {
  addExerciseTemplate,
  getAllExerciseTemplate,
  updateExercise,
};
