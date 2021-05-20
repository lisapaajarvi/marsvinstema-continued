const  express = require('express');
const mongoose = require('mongoose')
const app = express();

const dotenv = require("dotenv")

dotenv.config()




// connects to the DB

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.eexfj.mongodb.net/MarsvinsTema?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('You are now connected to your database!');
})
.catch((error)  => {
    console.error(error)
});



// listening to the server 
app.listen(4000); 