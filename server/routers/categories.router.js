const express = require('express');
const categoriesRouter = express.Router();
const controller = require('../controllers/categories.controller');

categoriesRouter
    .get('/categories', controller.getAllCategories)
    .get('/category/:id', controller.getOneCategory)
    .post('/categories', controller.addCategory)

module.exports = categoriesRouter;