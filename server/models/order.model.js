const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    user: {type: mongoose.Schema.Types.ObjectId},
    createdAt: {type: Number, required: true},
    totalPrice: {type: Number, required:  true},
    // products: product,
    // shippingAdress: Adress,
    // shippingMethod: shippingMethod,
})

const OrderModel = mongoose.model('order', orderSchema);

module.exports = OrderModel;