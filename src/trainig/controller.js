const Training = require("./model");

const addTraining = async (req, res) => {
  try {
    const { name } = req.body;

    const training = await Training.create({ name: name });

    res.status(500).jsnon({ message: error.message, error: error });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { addTraining };
