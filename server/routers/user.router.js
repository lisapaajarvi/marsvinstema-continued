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
  // .put("/users/", controller.changeUser)
  // .delete("/users/:id", controller.deleteUser)

// ADDRESS ENDPOINTS

.put("/user/address/:id", controller.newAddress)
.get("/user/address/:id", controller.getAddress)
.delete("/user/address/:id", controller.deleteAddress)

module.exports = userRouter;
