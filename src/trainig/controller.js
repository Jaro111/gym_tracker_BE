const Training = require("./model");

const addTraining = async (req, res) => {
  try {
    const { name, userId } = req.body;

    const training = await Training.create({ name: name, userId: userId });

    res.status(500).json({ message: "Training created", training: training });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addTraining };
