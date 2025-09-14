const express = require('express');
const Data = require('./calculator.json');
const connectDB=require('./db_config.js');
require('dotenv').config()
const app= express();
connectDB();

app.get('/sample',(req,res)=>{
    res.send("hello from exp");
});
app.get('/calculator',(req,res) =>{
    res.json(Data);
});
const  PORT= process.env.PORT;
app.listen(PORT, () => console.log(`server running ${PORT}`));
