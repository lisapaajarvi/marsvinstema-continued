const mongoose = require('mongoose');

export const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number },
    quantity: { type: Number },
    // category: { type: String, required: true },
    categories: { type: [String], required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    url: { type: String, required: true }
});


const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;
