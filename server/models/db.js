const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    
    number: Number,
    
    select: String,

    password: String,

    status: {
        type: String,
        default: "user",
    },
});

const db = mongoose.model("db", userSchema);
module.exports = db;