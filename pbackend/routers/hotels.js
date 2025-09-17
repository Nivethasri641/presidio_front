const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelcontroller');

//Routers
router.get('/',hotelController.getallHotel);
router.post('/',hotelController.createHotel);

module.exports = router;