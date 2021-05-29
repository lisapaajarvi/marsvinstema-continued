const express = require("express");
require('express-async-errors');
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");
const shippingMethodRouter = require("./routers/shippingmethod.router");
const cookieSession = require('cookie-session');
const fileUpload = require('express-fileupload');

dotenv.config()

// Static path for uploaded images
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
    
    // File Upload
    app.post('/upload', fileUpload({ createParentPath: true }), (req, res) => {
        console.log(req.files);
        if(req.files?.image) {
            const fileName = Date.now() + '-' + req.files.image.name
            req.files.image.mv('uploads/' + fileName, () => {
                res.status(200).send(fileName);
            })
        } else {
            res.status(500).send();
        }
    });
    app.listen(4000); 
})
.catch((error)  => {
    console.error(error)

});
