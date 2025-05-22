const express = require('express');

const {
    handleReceptionistLogin
} 
= require('../controllers/ReceptionistController');

const router = express.Router();

router.post('/login', handleReceptionistLogin);



module.exports = router;