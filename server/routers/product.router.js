const express = require("express");
const productRouter = express.Router();
const controller = require("../controllers/product.controller");

productRouter
	// Working
	.get("/products", controller.getAllProducts)
	.get("/product/:id", controller.getProduct)
	// .post("/products", controller.addProduct)
	.get("/products/categories", controller.getAllCategories)
	.get('/products/category', controller.getProductsByCategory)
// .get("/products/category", controller.getCatergory)
// .put("/product/:id", controller.editProduct)
// .post("/products", controller.addNewProduct)
// .delete("/product/:id", controller.deleteProduct);

module.exports = productRouter;
