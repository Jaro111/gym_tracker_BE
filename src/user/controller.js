const User = require("./model");
const jwt = require("jsonwebtoken");

// Sign Up
const signupUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if ((!username, !email, !password)) {
      return res
        .status(400)
        .json({ error: "Username, email and password required" });
    }

    const userRole = role === "admin" ? "admin" : "user";
    //
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: userRole,
    });
    res.status(200).json({ message: `${user.username} created`, user: user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// Log In

const logIn = async (req, res) => {
  try {
    if (req.authCheck) {
      const user = {
        id: req.authCheck.id,
        username: req.authCheck.username,
        emial: req.authCheck.email,
        password: req.authCheck.password,
      };

      res
        .status(200)
        .json({ message: "Persistant log in succesfull", user: user });
      return;
    }
    const token = await jwt.sign({ id: req.user.id }, process.env.SECRET);
    console.log(token);

    const user = {
      id: req.user.id,
      username: req.user.username,
      token: token,
    };
    res.status(200).json({ message: "Log In succesfull", user: user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = { signupUser, logIn };
