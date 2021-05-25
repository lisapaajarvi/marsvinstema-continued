const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
}, {
    toJSON: { virtuals: true }
}); 

categorySchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'categories'
})

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;