const express = require('express');
const Data = require('./calculator.json');
const connectDB=require('./db_config.js');
const userRoutes = require('./routers/users.js');
const hotelRoutes = require('./routers/hotels.js');

require('dotenv').config();
const app= express();

connectDB();
app.use(express.json());
app.use('/api/users',userRoutes);

connectDB();
app.use(express.json());
app.use('/api/hotels',hotelRoutes);

app.get('/sample',(req,res)=>{
    res.send("hello from exp");
});
app.get('/calculator',(req,res) =>{
    res.json(Data);
});
const  PORT= process.env.PORT;
app.listen(PORT, () => console.log(`server running ${PORT}`));
const fs = require("fs");
const path = require("path");
const user = require("./models/user.js");