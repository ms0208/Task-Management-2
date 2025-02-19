const express = require('express');
const router = express.Router(); // Corrected Router instance
const controllers = require('../controllers/usercontroller.js');

// Define Routes
router.post('/signup', controllers.signup);
router.post('/login',controllers.login);

module.exports = router;
