const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const extendSchema = require("mongoose-extend-schema");
const schema = require("./schema");
const GridStationModel = require("./gridStationModel");

const gridDistributorSchema = extendSchema(
  schema,
  {
    affiliatedGridStations: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "GridStationModel",                
      },
    ],
  },
  {
    timestamps: true,
  }
);

gridDistributorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  //hash the password in the cost of 12

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

gridDistributorSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

gridDistributorSchema.methods.correctPassword = async (
  candidatePassword,
  userPassword
) => {
  return bcrypt.compare(candidatePassword, userPassword);
};

gridDistributorSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changedTimeStamp, JWTTimestamp);
    return JWTTimestamp < changedTimeStamp;
  }
  //false means no changed
  return false;
};

gridDistributorSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const GridDistributorModel = mongoose.model("GridOwner", gridOwnerSchema);

module.exports = GridDistributorModel;
