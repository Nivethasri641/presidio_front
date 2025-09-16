const { default: mongoose } = require('mongoose');
const Hotel = require('../models/hotel');
//get/api/memeber
const getallHotel = async (req, res, next) => {
    try {
        const memeber = await Hotel.find();
        res.json(memeber);
    } catch (err) {
        console.log(err);
    }
};

//post/api/hotels
const createHotel = async (req, res, next) => {
    try {
        const mem = await Hotel.create(req.body);
        res.status(201).json(mem);
    } catch (err) {
        console.log(err);
    }
};
module.exports={
    getallHotel,
    createHotel
}