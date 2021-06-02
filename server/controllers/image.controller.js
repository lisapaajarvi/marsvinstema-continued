const { ImageModel } = require("../models/image.model");

exports.fetchImage = async (req, res) => {
    const image = ImageModel.findById(req.params.id)
    res.set('Content-type', image.mimetype)
    res.send(image.buffer)
}

exports.uploadImage = async (req, res) => {
    const newpath = __dirname + "/uploads/";
    const file = req.files.file;
    const filename = Date.now() + '-' + file.name;
    console.log(file)

    // TODO: save to db ImageModel.create(file)
    ImageModel.create(file)
    
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        res.status(500).send("File upload failed");
      }
        res.status(200).send("File Uploaded");
    })
}