const { Router } = require("express");

const { signupUser, logIn } = require("./controller");
const { hashPass, comparePass } = require("../middleware/auth");

const userRouter = Router();

// sign Up
userRouter.post("/user/signUp", hashPass, signupUser);

// Log In
userRouter.post("/user/logIn", comparePass, logIn);

module.exports = userRouter;
