// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    // id: {type: mongoose.Schema.Types.ObjectId},
    price: {type: Number, required:  true},
    category: {type: String, required: true},
    title: {type: String, required: true},
    // quantity?: Number,
    // stock?: Number,
})

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
