const mongoose = require("mongoose");

const {MONGODB_URI}= process.env;


const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify:false
        });
        console.log("Success connect to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect}