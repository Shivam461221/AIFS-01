const express = require('express');

const {handleDoctorSignup, 
       handleDoctorLogin
} 
= require('../controllers/DoctorController');

const router = express.Router();

router.post('/signup', handleDoctorSignup);

router.post('/login', handleDoctorLogin);

//router.get('/getAllReceptionist', );

module.exports = router;