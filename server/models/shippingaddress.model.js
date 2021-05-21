const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const AdressSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNr: {type: Number, required: true},
    streetAdress: {type: String, required: true},
    zipCode: {type: Number, required: true},
    city: {type: String},
   

})

const AdressModel = mongoose.model('shippingAdress', AdressSchema);

module.exports = AdressModel
;