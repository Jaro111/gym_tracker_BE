const { Router } = require("express");

const { signupUser, logIn, getAllUsers } = require("./controller");
const { hashPass, comparePass, tokenCheck } = require("../middleware/auth");

const userRouter = Router();

// sign Up
userRouter.post("/user/signUp", hashPass, signupUser);

// Log In
userRouter.post("/user/logIn", comparePass, logIn);

// token check
userRouter.get("/user/authCheck", tokenCheck, logIn);

// get all users

userRouter.get("/user/getAllUsers", getAllUsers);

module.exports = userRouter;
