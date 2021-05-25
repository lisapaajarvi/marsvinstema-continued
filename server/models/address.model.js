const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const AddressSchema = new mongoose.Schema({
    id: {type: ObjectId},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNr: {type: Number, required: true},
    streetAdress: {type: String, required: true},
    zipCode: {type: Number, required: true},
    city: {type: String},
})

const AddressModel = mongoose.model('shippingAddress', AddressSchema);

module.exports = AddressModel
;