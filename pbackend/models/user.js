const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    f_name:String,
    l_name:String,
    dob:Date,
    ph_no:String,
    email:{ type:String,unique:true},
    aadhar_no:String,
    address:String
});
module.exports = mongoose.model('User',userSchema);