const config = require("config")
const mongoose = require("mongoose")
const mongouri  = config.get("MONGO_URI")
const  connectDB = async ()=>{
     try {
         await mongoose.connect(mongouri)
         console.log("Database connected");
     } catch (error) {
         console.log("Error message: " ,  error);
     }
}


module.exports =  connectDB;