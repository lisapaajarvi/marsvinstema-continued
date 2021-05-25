const mongoose = require('mongoose');
// const { ObjectId } = require('mongodb');


// const productSchema = new mongoose.Schema({
//     // id: {type: mongoose.Schema.Types.ObjectId},
//     price: {type: Number, required:  true},
//     category: {type: String, required: true},
//     title: {type: String, required: true},
//     description: {type: String, required: true},
//     url: {type: String, required: true},
//     stock: Number,
//     img: String
//     // quantity?: Number,
// })
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    categories:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }],
    inventory: { type: Number, required: true }
});

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
