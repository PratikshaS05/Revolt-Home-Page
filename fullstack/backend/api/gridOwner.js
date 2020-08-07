const { Router } = require("express");
bodyParser = require("body-parser").json();
const catchAsync = require("./../utilities/catchAsync");
const AppError = require("./../utilities/appError");
const GridOwnerModel = require("../models/gridOwnerModel.js");
const {
  signup,
  login,
  protect,
  forgetPassword,
  resetPassword,
  updatePassword,
} = require("./../services/authServiceOwner.js");

const {isLoggedIn,loggedOut}= require("./../services/userServiceOwner");

const router = Router();

const filterObj = (obj, ...allowedFields)=>{
  const newObj={}
  Object.keys(obj).forEach(el=>{
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  })
  return newObj
}
//signup the user
router.post("/signup", bodyParser, signup);

//sign in the user
router.post("/login", bodyParser, login);

//logout the user
router.get("/logout",loggedOut)

//forget password
router.post("/forget-Password", bodyParser, forgetPassword);

//reset password
router.patch("/reset-Password/:token", bodyParser, resetPassword);

//update the password
router.patch("/updateMyPassword", bodyParser, protect, updatePassword);

//user can update data [role:user]
router.patch("/updateMe",bodyParser,protect,catchAsync(async (req,res,next)=>{
  //1. create error if user try to change password
   if(req.body.password) return next(new AppError("this route is not for password-update please use /updateMyPassword",400))
   
   //2.filtered out unwanted field names  that are not allowed tobe updated 
   const filteredBody = filterObj(req.body, "firstName","lastName","phoneNumber",)
   
   //3.update the users data
   const updatedUser = await GridOwnerModel.findByIdAndUpdate(req.user.id, filteredBody,{
     new:true,
     runValidators:true
   })
   
   
   res.status(200).json({
     status:"success",
     user: updatedUser
   })

  }))

// sends all users from db
router.get(
  "/",
  protect,
  catchAsync(async (req, res, next) => {     //need to add restrictTO middleware from authServices.js 
    const users = await GridOwnerModel.find();
    res.json(users);
  })
);


//adds a new user to the db [role:admin]
router.post(
  "/",
  bodyParser,
  catchAsync(async (req, res, next) => {
    const user = new GridOwnerModel(req.body);     // need to add restrictTo middleware from authService.js
    const createdUser = await user.save();
    res.json(createdUser);
  })
);

//task 1.1 / updates the users data to db[role :admin]
router.patch(
  "/update-user/:id",
  bodyParser,
  catchAsync(async (req, res, next) => {         // need to add restrictTo middleware from authService.js
    const user1 = await GridOwnerModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,                                                               
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        user1,
      },
    });
  })
);
// task 1.2 / delete the user from db 

router.delete(
  "/delete-user/:id",isLoggedIn,
  catchAsync(async (req, res, next) => {
    await GridOwnerModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  })
);

//task 1.3 / find by id
router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const users = await GridOwnerModel.findById(req.params.id);

    if (!users) {
      return next(new AppError("No user found", 404));
    }
    res.status(200).json({
      status: "success",
      data: { users },
    });
  })
);

module.exports = router;
