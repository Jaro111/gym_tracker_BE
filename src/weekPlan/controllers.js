const WeekPlan = require("./model");

const addTrainingToPlan = async (req, res) => {
  try {
    const { trainingId } = req.body;
    const weekPLan = await WeekPlan.create({
      userId: req.authCheck.id,
      trainingId: trainingId,
    });

    res.status(200).json({ message: "Training created", weekPLan: weekPLan });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getWeekPlan = async (req, res) => {
  try {
    const weekPlan = await WeekPlan.findAll({
      where: { userId: req.authCheck.id },
      include: ["Training"],
    });
    res.status(200).json({ message: "Plan Uploaded", weekPlan: weekPlan });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const removeTraining = async (req, res) => {
  try {
    const { trainingId, userId } = req.body;
    await WeekPlan.destroy({
      where: { trainingId: trainingId, userId: req.authCheck.id },
    });
    res.status(200).json({ message: "Training deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addTrainingToPlan, getWeekPlan, removeTraining };
