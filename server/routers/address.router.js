const express = require('express');
const addressRouter = express.Router();
const controller = require("../controllers/address.controller");

addressRouter
  .get("/address/:id", controller.getAddress)
  .put("/address/:id", controller.changeAddress)
  .post("/address/", controller.newAddress)
  .delete("/address/:id", controller.deleteAddress)

module.exports = addressRouter;