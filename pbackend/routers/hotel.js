const express = require('express');
const router = express.Router();
const userController = require('../controllers/hotelcontroller');

//Routers
router.get('/',hotelcontroller.getallHotel);
module.exports = router;