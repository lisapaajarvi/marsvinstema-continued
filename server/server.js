const  express = require('express');
const mongoose = require('mongoose')
const app = express();





// connects to the DB

mongoose.connect(`mongodb+srv://Admin:Admin123@cluster0.eexfj.mongodb.net/MarsvinsTema?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology: true
 });
console.log('You are now connected to your database!');






// listening to the server 
app.listen(3000); 