const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const bcrypt = require('bcryptjs');
const Receptionist = require('../models/Receptionist');


async function handleDoctorSignup(req, res) {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json({ doctor });
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

async function handleDoctorLogin(req, res) {
    const { email, password } = req.body;
    try {
        const doctor = await Doctor.findOne({ email: email.toLowerCase() });
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' })
        }

        const token = jwt.sign({ id: doctor._id, role: doctor.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ doctor, token });
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

async function handleRegisterReceptionist(req, res) {
    try {
        const receptionist = new Receptionist(req.body);
        await receptionist.save();
        res.status(201).json({ receptionist });
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

async function getAllReceptionist(req, res) {
    try {
        const receptionist = await Receptionist.find();
        res.status(200).json(receptionist)
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

async function handleUpdateReceptionist(req, res){
    try{
        const {id} = req.params;
        const {firstName, lastName, phoneNumber, email, password} = req.body;

        const updateData = {firstName, lastName, phoneNumber, email, password};

        if(password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateData.password = hashedPassword;
        }

        const receptionist = await Receptionist.findByIdAndUpdate(
            id, updateData, {new :true}
        );

        if(!receptionist) {
            return res.status(404).json({error:'Receptionist not found'});
        }
        res.status(200).json(receptionist);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

async function deleteReceptionist(req, res){
    try{
        const {id} = req.params;
        const receptionist = await Receptionist.findByIdAndDelete(id);

        if(!receptionist) return res.status(404).json({error:'Receptonist not found'});

        res.status(200).json({message:'Receptionist deleted successfully'});
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

module.exports = {
    handleDoctorSignup,
    handleDoctorLogin,
    handleRegisterReceptionist,
    getAllReceptionist,
    handleUpdateReceptionist,
    deleteReceptionist
}