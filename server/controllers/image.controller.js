const { ImageModel } = require("../models/image.model");

exports.fetchImage = async (req, res) => {
    const image = await ImageModel.findById(req.params.id)
    console.log(image);
    res.set('Content-Type', image.contentType)
    res.send(image.data)
}

exports.uploadImage = async (req, res) => {
    const file = req.files.file;
    console.log(file)

    const doc = await ImageModel.create({
      data: file.data,
      contentType: file.mimetype
    })

    res.status(200).json(doc.id)
}