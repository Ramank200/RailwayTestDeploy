const express = require("express");
const { CreateUser } = require("../Controllers/UserController/UserController");
const userRouter = express.Router();

userRouter.post("/createUser", CreateUser);

module.exports = userRouter;
