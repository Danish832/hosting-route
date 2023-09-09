const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/pages');

const app = express() ;

dotenv.config() ;

const PORT = process.env.PORT || 3000 ;

app.use('/',router);

app.listen(PORT,()=>{
    console.log(`Server up and running on port:${process.env.PORT}`);
    
})