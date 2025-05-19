const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

const uri = "mongodb://127.0.0.1:27017/crud";

app.use(express.json()); //middleware function  

mongoose.connect(uri)
.then(()=>console.log('Database connected'))
.catch((err)=>console.log(err));

const studentSchema = new mongoose.Schema({
    name:String,
    course:String,
    email:String,
    age:Number
}, 
{
    timestamps:true
});

const Student = mongoose.model('students', studentSchema);

//create
app.post('/add-student', async (req, res)=>{
    const student = new Student(req.body);
    const result = await student.save();
    res.status(201).json(result);
});

//Read
app.get('/get-students', async (req, res)=>{
    try{
    const result = await Student.find();
    res.json(result);
    }
    catch(err){
        res.json('Not found');
    }
});

app.get('/getStudentById/:id', async (req, res)=>{
    const result = await Student.findById(req.params.id);
    res.json(result);
});

//update
app.put('/update-student/:id', async (req, res)=>{
    try{
        const result = await Student.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(result);
    }
    catch(err){
        res.status(400).json('Something went wrong');
    }
});

//delete
app.delete('/delete-student/:id', async (req, res)=>{
    try{
        const result = await Student.findByIdAndDelete(req.params.id);
        res.json(result);
    }
    catch(err){
        res.json('Something went wrong');
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});


