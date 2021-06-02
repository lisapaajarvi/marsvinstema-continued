const express = require("express");
const productRouter = express.Router();
const controller = require("../controllers/product.controller");
const { checkAdminAccess, checkUserLogin } = require("../helpers/auth");

productRouter
	.get("/products", controller.getAllProducts)
	.get("/products/:id", controller.getProduct)
	.get("/products/categories", controller.getAllCategories)
	.get('/products/category', controller.getProductsByCategory)
	.put("/products/:id", checkAdminAccess, checkUserLogin, controller.editProduct)
	.post("/products", checkAdminAccess, controller.addProduct)
	.delete("/products/:id", checkAdminAccess, controller.deleteProduct)
module.exports = productRouter;
