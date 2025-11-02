const mongoose = require("mongoose");

const connectToDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://gudempavanstark_db_user:gudempavanstark_db_user11@cluster0.2a3501g.mongodb.net/")
        console.log('database is connected')

    }catch(e){
        console.log('not connected to the mongodb');
        process.exit(1);
    }
}

module.exports = connectToDB;