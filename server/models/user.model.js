const mongoose = require('mongoose');
const AddressSchema = require('./address.model')

const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     email: { type: String, required: true },
     password: { type: String, required: true, select: false },
     address: AddressSchema,
     access: String
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;