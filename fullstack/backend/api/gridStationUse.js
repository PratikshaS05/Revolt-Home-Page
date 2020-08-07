const { Router } = require("express");
bodyParser = require("body-parser").json();
const catchAsync = require("./../utilities/catchAsync");
const AppError = require("./../utilities/appError");

const GridStationModel = require("../models/gridStationModel.js");

const router = Router();

// task 3.1 send all  GridStations from db
router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const grid = await GridStationModel.find();

    res.status(200).json({
      status: "success",
      data: {
        grid,
      },
    });
  })
);

// task 3.2 / add new gridStationData to db
router.post(
  "/",
  bodyParser,
  catchAsync(async (req, res, next) => {
    const newGrid = await GridStationModel.create(req.body);
    res.status(200).json({
      status: "success",
      data: newGrid,
    });
  })
);

//task 3.3 / update the GridStationData to db

router.patch(
  "/update-station/:id",
  bodyParser,
  catchAsync(async (req, res, next) => {
    const updatedGrid = await GridStationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: updatedGrid,
    });
  })
);

//Task 3.4 / delete the GridStation from db
router.delete(
  "/delete-station/:id",
  catchAsync(async (req, res) => {
    await GridStationModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  })
);

//Task 3.5 find the GridStation By Id
router.get(
  "/find-station/:id",
  catchAsync(async (req, res) => {
    const Grid = await GridStationModel.findById(req.params.id);

    if (!Grid) {
      return next(new AppError("No user found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        Grid,
      },
    });
  })
);

module.exports = router;
