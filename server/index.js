const express = require("express");
const userRouter = require("./routes/usersRouter");
const blogsRouter = require("./routes/blogsRouter");
const mongoose = require("mongoose");
const assert = require("assert");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const url = "mongodb://localhost:27017/lets-blog";
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to database server");
  }
);

app.use("/blogs", blogsRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Node server running fine !!");
});

app.listen(4000, () => {
  console.log("server running at port no. 4000");
});
