const express = require('express');

const {
    handleLogin
} 
= require('../controllers/AuthController');

const router = express.Router();

router.post('/login', handleLogin);

module.exports = router;