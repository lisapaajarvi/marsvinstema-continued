const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    name: { type: String },
    data: Buffer,
    size: { type: Number },
    encoding: { type: String },
    tempFilePath: { type: String },
    truncated: { type: Boolean },
    mimetype: { type: String },
    md5: { type: String },
    mv: [Function, mv]
});

const UploadModel = mongoose.model('upload', uploadSchema);

module.exports = UploadModel;