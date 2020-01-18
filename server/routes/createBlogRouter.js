const express = require("express");
const createblogRouter = express.Router();
const Blog = require("../models/Blog");

createblogRouter.post("/", (req, res) => {
  var msender = req.body.sender;
  var mtitle = req.body.title;
  var mcontent = req.body.content;
  var mdate = req.body.date;

  console.log(req.body);
  // Blog.create(req.body)
  //   .then(res3 => console.log("success"))
  //   .catch(err => console.log(err));

  var newBlog = new Blog({
    sender: msender,
    title: mtitle,
    content: mcontent,
    date: mdate
  });

  newBlog
    .save()
    .then(r2 => {
      res.status(200).send(r2);
    })
    .catch(err => res.status(500).send(err));
});
module.exports = createblogRouter;
