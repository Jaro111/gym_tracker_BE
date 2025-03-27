const ExerciseTemplate = require("./model");

const addExerciseTemplate = async (req, res) => {
  try {
    const { name, sets, reps, trainingId, setsFrom, setsTo, category } =
      req.body;
    const exerise = await ExerciseTemplate.create({
      name: name,
      sets: sets,
      setsFrom: setsFrom,
      setsTo: setsTo,
      reps: reps,
      category: category,
      trainingId: trainingId,
    });

    res.status(200).json({ message: "Template created", exercise: exerise });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addExerciseTemplate };
