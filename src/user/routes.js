const { Router } = require("express");

const { signupUser, logIn } = require("./controller");
const { hashPass, comparePass, tokenCheck } = require("../middleware/auth");

const userRouter = Router();

// sign Up
userRouter.post("/user/signUp", hashPass, signupUser);

// Log In
userRouter.post("/user/logIn", comparePass, logIn);

// token check
userRouter.get("/user/authCheck", tokenCheck, logIn);

module.exports = userRouter;
