const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    quantity: { type: Number },
    categories: { type: [String], required: true },
    description: { type: String, required: true },
    imageId: { type: mongoose.Schema.Types.ObjectId }
}, {
    toJSON: { virtuals: true }
});

productSchema.virtual('imageUrl').get(function () {
    return "/api/upload/" + this.imageId
})

const ProductModel = mongoose.model('product', productSchema);

module.exports = { ProductModel, productSchema };