const express = require("express");
const imageRouter = express.Router();
const controller = require("../controllers/image.controller");
const { checkAdminAccess } = require("../helpers/auth");
const fileUpload = require('express-fileupload');

imageRouter
	.get("/upload/:id", controller.fetchImage)
	.post("/upload", checkAdminAccess, fileUpload(), controller.uploadImage)

module.exports = imageRouter;