const mongoose = require('mongoose');

const uri = "mongodb://127.0.0.1:27017/crud";

mongoose.connect(uri)
.then(()=>console.log('Connected'))
.catch((err)=>console.log(err));

const studentsSchema = new mongoose.Schema({
    name:String,
    course:String,
    email:String
}, {
    timestamps:true
});

const Students = mongoose.model('stduents', studentsSchema);

const student = new Students({name:'Shivam',course:'MCA',email:'shivam@123'});

student.save().then((res)=>console.log(res)).catch((err)=>console.log(err));

