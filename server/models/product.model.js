const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
<<<<<<< HEAD
    // id: {type: mongoose.Schema.Types.ObjectId},
    price: {type: Number, required:  true},
    category: {type: String, required: true},
    title: {type: String, required: true},
    // quantity: Number,
    // stock?: Number,
})
=======
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
>>>>>>> 766255a1fc42e6056a5ee2212ebfbac7191248f0

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;
