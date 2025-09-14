const User=require('./models/User');
const getallUser = async(requestAnimationFrame,resizeBy,next) => {
    try{
        const users = await User.find();
        resizeBy.json(users);
    } catch(err){
        next(err);
    }
};
module.exports = {
    getallUser
};