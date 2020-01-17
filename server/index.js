const express = require("express");
//const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected likewise...");
});

var my_schema = new mongoose.Schema({
  name: String
});
var my_model = mongoose.model('Kitten',my_schema);

var model1 = new my_model({name:ritik});
console.log(model1.name);


// const url = "mongodb://127.0.0.1:27017";

// const dbName = "Lets-Blog";
// const client = new MongoClient(url);

// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to mongoDb Server...");

//   const db = client.db(dbName);

//   client.close();
// });

app.get("/", (req, res) => {
  res.send("server running fine !!");
});

app.listen(4000, () => {
  console.log("server running at port no. 4000");
});
