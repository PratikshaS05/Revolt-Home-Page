const User  = require('../models/userModel');
const AppError = require("./../utilities/appError");
const catchAsync = require("./../utilities/catchAsync");
const jwt = require("jsonwebtoken");  

// more complex logic will be added here. e.g. calculating user stats, user login, identifying current logged in user, etc

exports.isLoggedIn = catchAsync (async (req, res, next) => {
     if(req.cookies.jwt){
      //1. verify token
    const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
  
    //3)check if users still exist
    const currentUser = await User.findById(decoded.id);
  
    if (!currentUser) return next(new AppError("user has logged out",404));
  
    //4)check if  user changed password after token is issued
  
    if (currentUser.changedPasswordAfter(decoded.iat)) return next(new AppError("user has changed password recently",404));
  
    req.user = currentUser;
    
    //there is logged in user
    res.locals.user= currentUser
    return next();
     }
     next()
  });

  exports.loggedOut = (req,res)=>{
    res.cookies("jwt","logged out",{
      expires: new Date(Date.now() + 10 * 1000),
      httponly:true
    })
    res.status(200).json({
      status:"success"
    })
  }