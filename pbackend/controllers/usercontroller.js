const User = require('../models/user.js');

const getallUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getallUser
};
