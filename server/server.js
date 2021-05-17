const mongoose = require('mongoose')
const server = 3000;





// connects to the DB

mongoose.connect(`mongodb+srv://Admin:Admin123@cluster0.eexfj.mongodb.net/MarsvinsTema?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology: true
 });
console.log('Connected to DB');






// listening to the server 
server.listen(server); 