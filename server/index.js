const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/usersRouter");
const blogsRouter = require("./routes/blogsRouter");
const createBlogRouter = require("./routes/createBlogRouter");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const url = "mongodb://localhost:27017/lets-blog";
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to database server");
  }
);

// app.use(
//   session({
//     name: "session-id",
//     secret: "12345-67890-09876-54321",
//     saveUninitialized: false,
//     resave: false,
//     store: new FileStore()
//   })
// );

// function auth(req, res, next) {
//   console.log(req.session);
// }
// app.use(auth);

app.use("/blogs", blogsRouter);
app.use("/users", userRouter);
app.use("/create_blog", createBlogRouter);

app.get("/", (req, res) => {
  res.send("Node server running fine !!");
});

app.listen(7000, () => {
  console.log("Server running at port no. 7000");
});
