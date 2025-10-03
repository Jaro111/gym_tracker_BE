const Day = require("./model");
const Exercise = require("../exercise/model");
const ExerciseTemplate = require("../exerciseTemplate/model");
const Training = require("../trainig/model");

// Create Training day
const addTrainingDay = async (req, res) => {
  try {
    const { date, trainingId } = req.body;

    const userId = req.authCheck.id;

    const templateData = await ExerciseTemplate.findAll({
      where: { trainingId: trainingId },
    });
    const trainingName = await Training.findOne({
      where: { id: trainingId, userId: userId },
    });

    const day = await Day.create({
      userId: userId,
      trainingName: trainingName.name,
      color: trainingName.color,
      date: date,
    });
    console.log(day);

    const exerciseData = templateData.map((template) => ({
      name: template.name,
      sets: template.sets,
      setsFrom: template.setsFrom,
      setsTo: template.setsTo,
      reps: template.reps,
      maxWeight: template.maxWeight,
      category: template.category,
      dayId: day.id,
      color: day.color,
    }));
    //
    const exercises = await Exercise.bulkCreate(exerciseData);
    //
    res.status(200).json({ message: "Assigned", trainingDay: exercises });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllTrainingDays = async (req, res) => {
  try {
    const trainingDays = await Day.findAll({
      where: { userId: req.authCheck.id },
      order: [["date", "ASC"]],
    });

    res
      .status(200)
      .json({ message: "Training Days Uploaded", trainingDays: trainingDays });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const deleteTrainingDay = async (req, res) => {
  try {
    const day = await Day.findOne({
      where: {
        userId: req.authCheck.id,
        date: req.body.date,
      },
    });
    const dayId = day.dataValues.id;
    //
    await Exercise.destroy({ where: { dayId: dayId } });

    await Day.destroy({ where: { id: dayId } });

    res.status(200).json({ message: "Day Deleted", day: day });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addTrainingDay, getAllTrainingDays, deleteTrainingDay };
