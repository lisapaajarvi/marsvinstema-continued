const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
        data: Buffer,
        contentType: String
});

// const imageSchema = new mongoose.Schema({
//     name: { type: String },
//     data: Buffer,
//     size: { type: Number },
//     encoding: { type: String },
//     tempFilePath: { type: String },
//     truncated: { type: Boolean },
//     mimetype: { type: String },
//     md5: { type: String },
//     // mv: { type: [Function] }
// });

const ImageModel = mongoose.model('image', imageSchema);

module.exports = { ImageModel, imageSchema };