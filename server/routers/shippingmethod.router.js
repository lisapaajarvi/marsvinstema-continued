const express = require("express");
const shippingMethodRouter = express.Router();
const controller = require("../controllers/shippingmethod.controller");


shippingMethodRouter
.get("/shippingMethod/", controller.getAll)
.get("/shippingMethod/:id", controller.getOne)//id

module.exports = shippingMethodRouter;