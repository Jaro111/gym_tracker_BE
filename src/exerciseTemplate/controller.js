const ExerciseTemplate = require("./model");

const addExerciseTemplate = async (req, res) => {
  try {
    const { name, sets, reps, trainingId, setsFrom, setsTo, category } =
      req.body;
    const exerise = await ExerciseTemplate.create({
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

module.exports = { addExerciseTemplate, getAllExerciseTemplate };
