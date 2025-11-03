const mongoose = require("mongoose");

const connectToDB = async()=>{
    try{
        await mongoose.connect("")
        console.log('database is connected')

    }catch(e){
        console.log('not connected to the mongodb');
        process.exit(1);
    }
}

module.exports = connectToDB;
