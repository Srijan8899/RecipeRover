const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/recipe-rover");

const userschema = mongoose.Schema({
  Fullname: String,
  email: String,
  password: String
});

userschema.plugin(plm);

module.export = mongoose.model( "user", userschema)