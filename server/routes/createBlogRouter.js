const express = require("express");
const createblogRouter = express.Router();
const Blog = require("../models/Blog");
const jwt = require("jsonwebtoken");

const jwtKey = "levelofquality";

createblogRouter.post("/", (req, res) => {
  const token = req.body.token.data;

  console.log("blogRouter");

  console.log(req.body.token.data);

  if (!token) {
    return res.status(401).end();
  }

  var payload;
  try {
    payload = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }

    return res.status(400).end();
  }

  var msender = req.body.sender;
  var mtitle = req.body.title;
  var mcontent = req.body.content;
  var mdate = req.body.date;

  console.log(req.body);

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
