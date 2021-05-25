const express = require('express');
const categoriesRouter = express.Router();
const controller = require('../controllers/categories.controller');

categoriesRouter
    .get('/categories', controller.getAllCategories)
    .get('/categories/:id', controller.getOneCategory)
    .post('/categories',
        // body('name').not().isEmpty(),
        controller.addCategory)

module.exports = categoriesRouter;