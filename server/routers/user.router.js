// export {};
const express = require('express');
const userRouter = express.Router();
const controller = require("../controllers/user.controller");

userRouter
  .post("/register", controller.register)
//   .delete("/logout", controller.logout)

module.exports = userRouter;