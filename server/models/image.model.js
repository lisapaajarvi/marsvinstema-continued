const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
        data: Buffer,
        contentType: String
});

const ImageModel = mongoose.model('image', imageSchema);

module.exports = { ImageModel, imageSchema };