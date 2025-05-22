const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const receptionistSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require:true
    }, 
    lastName:{
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
    },
    role:{
        type:String,
        default:'receptionist'
    }
}, {
    timestamps:true
});

receptionistSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

module.exports = mongoose.model('Receptionist', receptionistSchema);