var mongoose = require("mongoose");
const { Schema } = mongoose;


const slotBookingSchema= new Schema({
    startingTime:{type:String},
    endingTime:{type:String},
    chargerType:{type:String},
    status:{type:Boolean},
    User:
        {
            type:mongoose.Schema.ObjectId,
            ref:"User"
        },
    Station:
        {
            type:mongoose.Schema.ObjectId,
            ref:"gridStationModel"
        }
    ,

date :{type:String}
},{
    timestamps:true
})
const slotBookingModel = mongoose.model("slotBookingModel", slotBookingSchema);

module.exports = slotBookingModel;