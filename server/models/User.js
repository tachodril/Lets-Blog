const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var user_schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", user_schema);
