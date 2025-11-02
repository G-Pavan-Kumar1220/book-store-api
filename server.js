require('dotenv').config()

const express = require('express');
const connectToDB = require('./Data base/db');
const BookRoutes = require('./routes/Book-routs')

app = express();
const PORT = process.env.PORT || 3000

// connect to our database
connectToDB();

//mmiddleware  -> express.json()

app.use(express.json());

//routes here
app.use('/api/books',BookRoutes)


app.listen(PORT,()=>{
    console.log("server is running sucessfully");
    
})