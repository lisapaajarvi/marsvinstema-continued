const express = require("express");
const productRouter = express.Router();
const controller = require("../controllers/product.controller");

productRouter.get("/product", controller.getPruduct);
productRouter.get("/product/:id", controller.getProducts);
productRouter.get("/products/filtered", controller.filteredProducts);
productRouter.put("/product/:id", controller.editProduct);
productRouter.post("/products", controller.addNewProduct);
productRouter.deletet("/product/:id", controller.deleteProduct);

module.exports = productRouter;
