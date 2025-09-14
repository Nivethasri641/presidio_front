const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

//Routers
router.get('/',userController.getallUser);
router.post('/',userController.createUser);
module.exports = router;