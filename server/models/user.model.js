const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userName: { type: 'String', required: true },
	email: { type: 'String', required: true },
	password: { type: 'String', required: true },
	access: { type: 'String', required: true },
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
