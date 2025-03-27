const User = require("./model");

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
    const { user } = req.body;
    res.status(200).json({ message: "Logged In", user: user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = { signupUser, logIn };
