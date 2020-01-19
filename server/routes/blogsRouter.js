const express = require("express");
const blogsRouter = express.Router();
const Blog = require("../models/Blog");
const jwt = require("jsonwebtoken");

const jwtKey = "levelofquality";

blogsRouter.get("/", (req, res, next) => {
  const token = req.cookies.token;
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

  Blog.find({}).then(result => {
    res.status(200).send(result);
  });
});

module.exports = blogsRouter;
