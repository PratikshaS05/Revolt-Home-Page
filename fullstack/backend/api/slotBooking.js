const { Router } = require("express");
bodyParser = require("body-parser").json();
const catchAsync = require("./../utilities/catchAsync");
const AppError = require("./../utilities/appError");

const slotBookingModel = require("../models/slotBookingModel.js");

const router = Router();

// task 3.1 send all  slotBooking from db
router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const slot = await slotBookingModel.find();

    res.status(200).json({
      status: "success",
      data: {
        slot
      },
    });
  })
);

// task 3.2 / add new slotBooking to db
router.post(
  "/",
  bodyParser,
  catchAsync(async (req, res, next) => {
    const newSlot = await slotBookingModel.create(req.body);
    res.status(200).json({
      status: "success",
      data: newSlot
    });
  })
);

module.exports = router;