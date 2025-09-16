const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },     
    location: { type: String, required: true },      
    address: { type: String, required: true },       
    contact_number: { type: String, required: true },
    email: { type: String, unique: true },         
    rating: { type: Number, min: 0, max: 5 }         
});

module.exports = mongoose.model('hotel', hotelSchema);
