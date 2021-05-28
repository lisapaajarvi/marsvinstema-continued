const mongoose = require('mongoose');

const shippingMethodSchema = new mongoose.Schema({
   name: {type: String, required: true},
   expectedDeliveryTime: {type: Number, required: true},
   price: {type: Number, required: true}
});

const ShippingMethodModel = mongoose.model('shippingMethod', shippingMethodSchema);

module.exports = { ShippingMethodModel, shippingMethodSchema };