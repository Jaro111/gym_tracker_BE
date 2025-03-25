const Day = require("./model");
const Training = require("../trainig/model");

const addTrainingDay = async (req, res) => {
  try {
    const { date, trainingId } = req.body;

    const day = await Day.create({ date: date, trainingId: trainingId });

    const trainingDay = await Day.findOne({
      where: { date: date },
      include: ["Training"],
    });

    traininName = trainingDay.Training.dataValues.name;

    res.status(200).json({
      message: `Assigned ${traininName} to ${date} `,
      day: trainingDay,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addTrainingDay };
