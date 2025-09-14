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

module.exports = {
    getallUser,
    createUser
};
