const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blog_schema = new Schema({
  sender: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Blog", blog_schema);
