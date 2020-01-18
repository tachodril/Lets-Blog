const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blog_schema = new Schema({
  sender: {
    type: String
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: String
  }
});
module.exports = mongoose.model("Blog", blog_schema);
