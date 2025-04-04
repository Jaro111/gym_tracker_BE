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

    req.user = user;
    next();
  } catch (error) {}
};

const tokenCheck = async (req, res, next) => {
  try {
    console.log(req.header("Authorization"));

    if (!req.header("Authorization")) {
      throw new Error("No token passed");
    }
    const token = req.header("Authorization").replace("Bearer ", "");

    const decodedToken = await jwt.verify(token, process.env.SECRET);

    const user = await User.findOne({ where: { id: decodedToken.id } });

    if (!user) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }

    req.authCheck = user;
    next();
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = { hashPass, comparePass, tokenCheck };
