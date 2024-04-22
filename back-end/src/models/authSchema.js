const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String
},{timestamps:true});


const userdb = new mongoose.model("google_login",userSchema);

module.exports = userdb;