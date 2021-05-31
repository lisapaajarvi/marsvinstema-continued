const express = require("express");
const shippingMethodRouter = express.Router();
const controller = require("../controllers/shippingmethod.controller");


shippingMethodRouter
.get("/shippingMethods/", controller.getAllShippingMethods)
.get("/shippingMethods/:id", controller.getChosenShippingMethod)
.post("/shippingMethods/", controller.addShippingMethod)

module.exports = shippingMethodRouter;