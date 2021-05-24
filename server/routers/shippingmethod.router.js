const express = require("express");
const shippingMethodRouter = express.Router();
const controller = require("../controllers/shippingmethod.controller");


shippingMethodRouter
.get("/shippingMethod/", controller.getAllShippingMethods)
.get("/shippingMethod/:id", controller.getChosenShippingMethod)

module.exports = shippingMethodRouter;