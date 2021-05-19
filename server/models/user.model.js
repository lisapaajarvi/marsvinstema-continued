const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // username: { type: String, required: true },
    // password: { type: String, required: true },
    // access: String
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;