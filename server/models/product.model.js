const mongoose = require('mongoose');
// const { ObjectId } = require('mongodb');


const productSchema = new mongoose.Schema({
    // id: {type: mongoose.Schema.Types.ObjectId},
    price: {type: Number, required:  true},
    category: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true},
    stock: Number,
    img: String
    // quantity?: Number,
})

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
