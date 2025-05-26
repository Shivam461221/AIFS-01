const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Doctor = require('../models/Doctor');
const Receptionist = require('../models/Receptionist');

async function handleLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const lowerEmail = email.toLowerCase();
        let user = await Doctor.findOne({ email: lowerEmail });
        let role = 'doctor';
        if (!user) {
            user = await Receptionist.findOne({ email: lowerEmail });
            role = 'receptionist';
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, role: role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ user, token, role });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { handleLogin };
