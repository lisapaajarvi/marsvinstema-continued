const express = require("express");
const userRouter = express.Router();
const controller = require("../controllers/user.controller");
const checkAdminAccess = require("../helpers/auth");

userRouter
  //Full working endpoints
  .post("/users/register", controller.register)
  .post("/users/login", controller.login)
  .post("/users/logout", controller.logout)
  .get("/user/:id", controller.getOneUser)
  .get("/users/", checkAdminAccess, controller.getAllUsers)
  //New untested
  .get("/user/getCurrentUser", controller.getCurrentUser)
  // .put("/users/", controller.changeUser)
  // .delete("/users/:id", controller.deleteUser)

module.exports = userRouter;