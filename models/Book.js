const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
    title:{
        type : String,
        required : [true,'Book title is required'],
        trim : true,
        maxLength : [100,'Book title can not be more then 100 charecters']
    },
    author:{
        type : String,
        required : [true,'Author name is required'],
        trim : true,
        
    },
    year:{
        type:Number,
        required:[true,'pubication year is required'],
        min:[1000,'year must be atleast 1000'],
        max: [new Date().getFullYear(),'year cannot be in the futer'],
        createdAt: Date.now
    }
})


module.exports = mongoose.model('Book',BookSchema);

