const express = require('express');
const userRouter = express.Router();
const controller = require("../controllers/user.controller");

userRouter
  //Full working endpoints
  .post("/users/register", controller.register)
  //New untested
  .get("/users/", controller.getAll)
  .get("/users/:id", controller.getOne)
  .put("/users/", controller.changeUser)
  .delete("/users/:id", controller.deleteUser)

module.exports = userRouter;
