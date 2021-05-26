const CategoryModel = require('../models/categories.model');

// exports.getAllCategories = async (req, res) => {
//     const categories = await CategoryModel.find({}).populate('products').sort({ name: 1 });
//     res.status(200).json(categories);
// }
exports.getAllCategories = async (req, res) => {
    const categories = await CategoryModel.find({});
    res.status(200).json(categories);
}

exports.getOneCategory = async (req, res) => {
    const { _id } = req.body;
    const category = await CategoryModel.findOne({_id:_id});
    res.status(200).json(category);
}

exports.addCategory = async (req, res) => {
    const newCategory = await CategoryModel.create(req.body);
    res.status(201).json(newCategory);
}
