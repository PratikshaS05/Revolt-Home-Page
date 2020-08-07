// module.exports = (error, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: error.message,
//     stack: process.env.NODE_ENV === "production" ? "-" : error.stack,
//   });
// };

const Apperror = require("./../utilities/appError");

const handleCastErrorDB = (err, res) => {
  const message = `invalid ${err.path}=${err.value}`;
  return new Apperror(message, 400);
};

const handleDuplicateErrorDB = (err, res) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/);
  const message = `already used ${value[0]}`;
  return new Apperror(message, 400);
};

const handleValidationError = (err, res) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  //console.log(errors);
  const message = `validation error ${errors.join(". ")}`;
  return new Apperror(message, 400);
};
//will print the error when in devlopment stage
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

//will print the error when in production
const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log("errrorr", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  //for development
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }
  //for production
  else {
    let error = { ...err };
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateErrorDB(error);
    if (error.name === "ValidationError") error = handleValidationError(error);
    sendErrorProd(error, res);
  }
};
