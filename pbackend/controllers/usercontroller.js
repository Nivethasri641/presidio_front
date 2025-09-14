const { default: mongoose } = require('mongoose');
const User = require('../models/user');
//get/api/users
const getallUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
    }
};
//post/api/users
const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
};
//put/api/users
const updateUser = async (req,res,next) => {
    try {
        const {id }= req.params;
        if (!mongoose.isValidObjectId(id)) {
            return React.status(400).json({ message:"Invalid" });
        }
        const updated =  await User.findByIdAndUpdate(id,req.body);
        if (!updated) return res.status(404).json({ message: "user not found"});
        return res.status(200).json(updated);
    }catch (err){
        next(err);
    }
};
//delete/api/users
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        // validate ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const deleted = await User.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully", deleted });
    } catch (err) {
        next(err);
    }
};

//patch/api.users
const patchUser = async (req, res, next) => {
    try {
        const { f_name } = req.params;
        const patched = await User.findOneAndUpdate(
            { f_name },{ $set: req.body },{ new: true } );

        if (!patched) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(patched);
    } catch (err) {
        next(err);
    }
};


module.exports = {
    getallUser,
    createUser,
    updateUser,
    deleteUser,
    patchUser
};
