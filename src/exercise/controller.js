const Exercise = require("./model");
const Day = require("../day/model");

// Create exercise is in day controllers
// It's a create Training day

// get Day by date

const getTrainingByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const day = await Day.findOne({
      where: { date: date, userId: req.authCheck.id },
    });

    const allExercises = await Exercise.findAll({
      where: { dayId: day.id },
      include: ["Day"],
    });

    res.status(200).json({ message: "Assigned", allExercises: allExercises });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { getTrainingByDate };
