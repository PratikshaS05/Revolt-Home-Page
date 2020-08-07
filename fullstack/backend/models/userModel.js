const mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const extendSchema = require("mongoose-extend-schema");
const schema = require("./schema")



// TODO: need to add tracking fields. e.g. visited grid stations, etc.
const userSchema = extendSchema(schema,{
    
    
    ownedVehicals: [Number] // TODO: after creating vehical schema we'll change it to [vehicalSchema]
}, {
        timestamps: true
    }
);

userSchema.pre('save', async function(next){
if(!this.isModified("password")) return next();

//hash the password in the cost of 12

this.password = await bcrypt.hash(this.password,12);
  next();
})

userSchema.pre("save", function(next){
    if(!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt= Date.now() - 1000
    next();
})


userSchema.methods.correctPassword = async (candidatePassword,userPassword)=>{
    return bcrypt.compare(candidatePassword,userPassword)
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if(this.passwordChangedAt){
        const changedTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000,10)
        console.log(changedTimeStamp,JWTTimestamp)
    return JWTTimestamp < changedTimeStamp;
    }
 //false means no changed
    return false
}

userSchema.methods.createPasswordResetToken= function(){
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken
 
}

//const gridSchema = extendSchema(userSchema);

const User = mongoose.model('User', userSchema);
//const GridOwner = mongoose.model("GridOwner",gridSchema);



module.exports = User; 