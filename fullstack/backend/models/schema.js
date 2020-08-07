const mongoose = require('mongoose');
const { Schema } = mongoose;


const requiredString = {
    type: String,
    required: true
};

const requiredNumber = {
    type: Number,
    required: true
};

const schema = new Schema({
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    firstName: requiredString,
    lastName: requiredString,
    //userName: requiredString,
    password : {
        type: String,
        required:[true, "please provide password"],
        minlength:4
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        unique:true
        
       
    },
    phoneNumber: requiredNumber,
    /*Address: {
        latitude: {
            ...requiredNumber,
            min: -90,
            max: 90,
        },
        longitude: {
            ...requiredNumber,
            min: -180,
            max: 180
        }
    },*/
    
    passwordChangedAt : {type:Date},
    passwordResetToken : {type:String},
    passwordResetExpires :{type : Date},
    
}/*, {
        timestamps: true
    }*/
);

module.exports = schema