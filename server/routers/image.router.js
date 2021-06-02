const express = require("express");
const imageRouter = express.Router();
const controller = require("../controllers/image.controller");
const { checkAdminAccess } = require("../helpers/auth");

imageRouter
	.get("/upload:id", controller.fetchImage)
	.post("/upload", checkAdminAccess, controller.uploadImage)

module.exports = imageRouter;