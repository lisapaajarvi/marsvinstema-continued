const express = require("express");
const productRouter = express.Router();
const controller = require("../controllers/product.controller");

productRouter
	.get("/products", controller.getAllProducts)
	.get("/product/:id", controller.getProduct)
	// .get("/products/filtered", controller.filteredProducts)
	// .put("/product/:id", controller.editProduct)
	// .post("/products", controller.addNewProduct)
	// .delete("/product/:id", controller.deleteProduct);

module.exports = productRouter;
