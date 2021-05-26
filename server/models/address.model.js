const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNr: {type: Number, required: true},
    streetAdress: {type: String, required: true},
    zipCode: {type: Number, required: true},
    city: {type: String},
}, { id: false })

module.exports = AddressSchema;