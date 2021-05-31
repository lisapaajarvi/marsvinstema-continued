const { ProductModel } = require("../models/product.model");

exports.getProduct = async (req, res) => {
    const { _id } = req.body;
    const product = await ProductModel.findOne({ _id: _id });
    res.status(200).json(product);
}

exports.getAllProducts = async (req, res) => {
    const products = await ProductModel.find({});
    res.status(200).json(products);
}

exports.getAllCategories = async (req, res) => {
    const products = await ProductModel.find({});
    let categories = [];
    products.forEach(p => categories.push(...p.categories));
    // remove duplicates
    categories = [...new Set(categories)];
    res.status(200).json(categories);
}

exports.getProductsByCategory = async (req, res) => {
    const products = await ProductModel.find({})
    categories = products.map(product => {
        return {'title': product.title, 'categories': product.categories};
    });
    res.status(200).json(categories); 
}

exports.editProduct = async (req, res) => {
    const { _id } = req.body;
    const updatedProduct = await ProductModel.findOneAndUpdate({ _id: _id }, req.body);
    res.status(200).json(updatedProduct);
}

exports.deleteProduct = async (req, res) => {
    const deletedProduct = await ProductModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deletedProduct);
}

exports.addProduct = async (req, res) => {
    const productToCreate = {
      title: req.body.title,
      price: req.body.price,
      stock: req.body.stock,
      categories: req.body.categories,
      description: req.body.description,
      img: req.body.img,
      url: req.body.url
    };

    const newProduct = await ProductModel.create(productToCreate);
    res.status(201).json(newProduct);
}