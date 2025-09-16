const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelcontroller');

//Routers
router.get('/',hotelController.getallHotel);

module.exports = router;