
//login

//register a patient

//get A Patient By Id
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Receptionist = require('../models/Receptionist');

async function handleReceptionistLogin(req, res){
    const {email, password} = req.body;
    try{
        const receptionist = await Receptionist.findOne({email:email.toLowerCase()});
        if(!receptionist){
            return res.status(404).json({error:'Receptionist not found'});
        }

        const isMatch = await bcrypt.compare(password, receptionist.password);
        if(!isMatch){
            return res.status(400).json({error:'Invalid credentials'})
        }

        const token = jwt.sign({id:receptionist._id, role:receptionist.role}, process.env.JWT_SECRET, {expiresIn:'1h'});
        res.status(200).json({receptionist, token});
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

//register a patient

//delete patient

//update patient

module.exports = {
    handleReceptionistLogin
}
