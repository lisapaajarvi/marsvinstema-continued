const mongoose = require('mongoose');

const shippingMethodSchema = new mongoose.Schema({
   id: { type: mongoose.Schema.Types.ObjectId},
   name: {type: String, required: true},
   expectedDeliveryTime: {type: Number, required: true},
   price: {type: Number, required: true}

});

const UserModel = mongoose.model('shippingMethod', shippingMethodSchema);

module.exports = UserModel;