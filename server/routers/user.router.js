const express = require("express");
const userRouter = express.Router();
const controller = require("../controllers/user.controller");

userRouter.post("/users/register", controller.register);

module.exports = userRouter;
