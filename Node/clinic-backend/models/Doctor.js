const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require:true
    }, 
    lastname:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('Doctor', doctorSchema);