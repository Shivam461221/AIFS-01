const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const bcrypt = require('bcryptjs');


async function handleDoctorSignup(req, res){
    try{
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json({doctor});
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

async function handleDoctorLogin(req, res){
    const {email, password} = req.body;
    try{
        const doctor = await Doctor.findOne({email:email.toLowerCase()});
        if(!doctor){
            return res.status(404).json({error:'Doctor not found'});
        }

        const isMatch = await bcrypt.compare(password, doctor.password);
        if(!isMatch){
            return res.status(400).json({error:'Invalid credentials'})
        }

        const token = jwt.sign({id:doctor._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
        res.status(200).json({doctor, token});
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

//regster a receptionist

//getAllreceptionist

//deleteReceptionist

module.exports = {handleDoctorSignup, handleDoctorLogin}