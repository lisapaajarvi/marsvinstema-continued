const express = require('express');
const orderRouter = express.Router();
const controller = require("../controllers/order.controller");
const { checkAdminAccess, checkUserLogin } = require("../helpers/auth");

orderRouter
    .get("/orders", checkAdminAccess, controller.getAllOrders)
    .get("/orders/:id", controller.getOrder)
    .post("/orders", controller.addNewOrder)
    .put("/orders/:id", controller.editOrderStatus)

module.exports = orderRouter;
