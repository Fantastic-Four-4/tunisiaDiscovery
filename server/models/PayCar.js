const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarPaySchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  title:String,
  userphone:  Number,
    
  startD: {
    type: String,
  },
  endD: {
    type: String,
  },
  time: String,

  total: String,

  status: {
    type: String,
    default: "user",
  },
});

const PayCar = mongoose.model("PayCar", CarPaySchema);
module.exports = PayCar;
