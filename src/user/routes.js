const { Router } = require("express");

const { signupUser } = require("./controller");

const userRouter = Router();

userRouter.post("/user/signUp", signupUser);

module.exports = userRouter;
