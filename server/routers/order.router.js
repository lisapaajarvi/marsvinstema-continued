const express = require("express");
const productRouter = express.Router();
const controller = require("../controllers/product.controller");

productRouter
	.get("/product", controller.getPruduct)
	.get("/product/:id", controller.getProducts)
	.get("/products/filtered", controller.filteredProducts)
	.put("/product/:id", controller.editProduct)
	.post("/products", controller.addNewProduct)
	.deletet("/product/:id", controller.deleteProduct);

module.exports = productRouter;
