const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.vryn0.mongodb.net/finallab?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected');
}

module.exports = connectDB;