const express = require("express");
const blogsRouter = express.Router();
const Blog = require("../models/Blog");

blogsRouter.get("/", (req, res, next) => {
  Blog.find({}).then(result => {
    res.statusCode(200);
    res.send(result);
  });
});

module.exports = blogsRouter;
