const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.MONGODB_URL
const connectDB = async() => {
    try{
        await mongoose.connect(URL,{})
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB