const ProductModel = require("../models/product.model");




exports.getProduct = async (req, res) => {
    const { _id } = req.body;
    const product = await ProductModel.findOne({ _id: _id });
    res.status(200).json(product);
}

exports.getAllProducts = async (req, res) => {
    const products = await ProductModel.find({});
    // console.log(products)
    res.status(200).json(products);
}


exports.getAllCategories = async (req, res) => {
    const products = await ProductModel.find({});
    
    let categories = [];
    products.forEach(p => categories.push(...p.categories));
    
    // remove duplicates
    categories = [...new Set(categories)];
    
    // console.log(categories)
    res.status(200).json(categories);
}

exports.getProductsByCategory = async (req, res) => {
    const products = await ProductModel.find({})
    categories = products.map(product => {
        return {'title': product.title, 'categories': product.categories};
    });
    res.status(200).json(categories);
    
}





// exports.addProduct = async (req, res) => {
//     const addedProduct = await (await ProductModel.create(req.body));
//     res.status(201).json(addedProduct);
// }

// exports.editProduct = async (req, res) => {

// }
// exports.addNewProduct = async (req, res) => {

// }
// exports.deleteProduct = async (req, res) => {

// }
