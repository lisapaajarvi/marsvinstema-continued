const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNr: {type: String, required: true},
    streetAddress: {type: String, required: true},
    zipCode: {type: String, required: true},
    city: {type: String, required: true},
}, { id: false })

module.exports = AddressSchema;