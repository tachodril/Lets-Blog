const express = require("express");
const usersRouter = express.Router();
const User = require("../models/User");

usersRouter
  .get("/signup", (req, res, next) => {
    res.send("Sign Up details necessary...");
  })
  .post("/signup", (req, res, next) => {
    var musername = req.body.username;
    var mpassword = req.body.password;
    console.log(req.body.username + " " + req.body.password);

    User.findOne({ username: musername, password: mpassword })
      .then(result => {
        console.log(result);

        if (!result) {
          var user = new User({
            username: musername,
            password: mpassword
          });
          user
            .save()
            .then(r => res.status(200).send(r))
            .catch(e => res.send(e));
        } else {
          res.status(404).send("Already found");
        }
      })
      .catch(e => res.send(e));
  });

usersRouter
  .get("/signin", (req, res, next) => {
    res.send("Send user details...");
  })
  .post("/signin", (req, res, next) => {
    var musername = req.body.username;
    var mpassword = req.body.password;
    console.log(req.body.username + " " + req.body.password);

    User.findOne({ username: musername, password: mpassword })
      .then(result => {
        console.log(result);

        if (!result) {
          res.send("User not available in database...");
        } else {
          res.status(200).send("User found");
        }
      })
      .catch(e => res.send(e));
  });

module.exports = usersRouter;
