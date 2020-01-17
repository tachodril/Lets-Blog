const express = require("express");
const blogsRouter = express.Router();
const Blog = require("../models/Blog");

blogsRouter.get("/", (req, res, next) => {
  Blog.find({}).then(result => {
    res.status(200).send(result);
  });
});

module.exports = blogsRouter;
