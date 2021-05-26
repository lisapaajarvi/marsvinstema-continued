const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categories:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }],
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number },
    description: { type: String, required: true },
    img: { type: String, required: true },
    url: { type: String, required: true }
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;
