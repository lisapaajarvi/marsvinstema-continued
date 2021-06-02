const express = require("express");
require('express-async-errors');
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");
const orderRouter = require("./routers/order.router");
const shippingMethodRouter = require("./routers/shippingmethod.router");
const cookieSession = require('cookie-session');
const fileUpload = require('express-fileupload');

dotenv.config()

// Static path for uploaded images
app.use(fileUpload());
app.use('/uploads', express.static('uploads'));

// connects to the DB
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.eexfj.mongodb.net/MarsvinsTema?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('You are now connected to your database!');

    app.use(express.json());

    app.use(cookieSession({
      name: "session",
      secret: "SuperSecretKey",
      secure: false,
      maxAge: 1000 * 60 * 30,
      httpOnly: false,
      path: "/",
    }));

    app.use("/api", userRouter);
    app.use("/api", productRouter);
    app.use("/api", shippingMethodRouter);
    app.use("/api", orderRouter);
    
    // File Upload
    app.post("/upload", (req, res) => {
        const newpath = __dirname + "/uploads/";
        const file = req.files.file;
        const filename = Date.now() + '-' + file.name;
        console.log(file)
        // TODO: save to db ImageModel.create(file)
      
        file.mv(`${newpath}${filename}`, (err) => {
          if (err) {
            res.status(500).send("File upload failed");
          }
          res.status(200).send("File Uploaded");
        });
      });

    app.get("/upload/:id", (req, res) => {
      const image = ImageModel.findById(req.params.id)
      res.set('Content-type', image.mimetype)
      res.send(image.buffer)
    })

    app.listen(4000); 
})
.catch((error)  => {
    console.error(error)
});