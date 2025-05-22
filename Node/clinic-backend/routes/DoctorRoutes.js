const express = require('express');

const {handleDoctorSignup, 
       handleDoctorLogin,
       handleRegisterReceptionist,
       getAllReceptionist,
       handleUpdateReceptionist,
       deleteReceptionist
} 
= require('../controllers/DoctorController');

const validateToken = require('../middlewares/JwtMiddleware');

const router = express.Router();

router.post('/signup', handleDoctorSignup);

router.post('/login', handleDoctorLogin);

router.post('/register-receptionist', validateToken, handleRegisterReceptionist)

router.get('/getAllReceptionist',validateToken,  getAllReceptionist);

router.put('/update-receptionist/:id',validateToken,  handleUpdateReceptionist);

router.delete('/delete-receptionist/:id',validateToken,  deleteReceptionist)

//getReceptionistById

//deleteReceptionist

//updateReceptionist

module.exports = router;