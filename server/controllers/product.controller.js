const ProductModel = require("../models/product.model");

exports.getProduct = async (req, res) => {
const { _id } = req.body;
const product = await ProductModel.findOne({_id:_id});
    res.status(200).json(product); 
}

exports.getAllProducts = async (req, res) => {
    //lägg in middleware för admin check
    console.log("hej")
    const products = await ProductModel.find({});
    console.log(products)
    res.status(200).json(products);
}

exports.addProduct = async (req, res) => {
    const addedProduct = await (await ProductModel.create(req.body));
    res.status(201).json(addedProduct);
}

// exports.getProductsByCategory = async (req, res) => {
//     const products = await ProductModel.find({'categories': req.params.id}).populate('categories').sort({ title: 1 });
//     console.log(products);
//     res.status(200).json(products);
// }


// exports.getCategory = async (req, res) => {
 
// }
// exports.editProduct = async (req, res) => {
 
// }
// exports.addNewProduct = async (req, res) => {
 
// }
// exports.deleteProduct = async (req, res) => {
 
// }