const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const userRouter = require("./routers/user.router");

dotenv.config()

// connects to the DB
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.eexfj.mongodb.net/MarsvinsTema?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('You are now connected to your database!');

    app.use(express.json());

    // app.use(cookieSession({
    //   name: "session",
    //   secret: "SuperSecretKey",
    //   secure: false,
    //   maxAge: 100000 * 10,
    //   httpOnly: false,
    //   path: "/",
    // }));
    app.use("/api", userRouter);
    app.listen(4000); 
})
.catch((error)  => {
    console.error(error)

});

// listening to the server 