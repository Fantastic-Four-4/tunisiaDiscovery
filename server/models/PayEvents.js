const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  title:String,
    username: {
        type: String,
        required: true,
      },
      useremail: {
        type: String,
        required: true,
      },
      userphone: {
        type: Number,
        required: true,
      },
      
      dateevents: String,
    
      price: String,
    
      
    
});

const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;