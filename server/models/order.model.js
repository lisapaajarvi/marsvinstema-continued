const mongoose = require('mongoose');
const { productSchema } = require('./product.model');
const addressSchema = require('./address.model');
const { shippingMethodSchema } = require('./shippingmethod.model')

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true},
    createdAt: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    products: { type: [productSchema], required: true},
    shippingAddress: { type: addressSchema, required: true},
    shippingMethod: { type: shippingMethodSchema, required: true},
})

const OrderModel = mongoose.model('order', orderSchema);

module.exports = OrderModel;