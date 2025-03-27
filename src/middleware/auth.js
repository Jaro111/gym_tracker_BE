const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../user/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

//
const hashPass = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashPassword;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });

    const passwordToCompare = user.dataValues.password;

    const checkPassword = await bcrypt.compare(password, passwordToCompare);

    if (!checkPassword) {
      res.satus(401).json({ message: "Wrong password" });
      return;
    }

    req.body.user = user;
    console.log(user);
    next();
  } catch (error) {}
};

module.exports = { hashPass, comparePass };
