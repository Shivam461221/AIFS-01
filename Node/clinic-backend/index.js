require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(bodyParser.json());

const doctorRoutes = require('./routes/DoctorRoutes');
const receptionistRoutes = require('./routes/ReceptionistRoutes');
const patientRoutes = require('./routes/PatientRoutes');


app.use('/api/doctor', doctorRoutes);
app.use('/api/receptionist', receptionistRoutes);
// app.use('/api/patient', patientRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})