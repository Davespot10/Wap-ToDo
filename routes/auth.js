var express = require("express");
const { default: mongoose } = require("mongoose");
var router = express.Router();
var user = require("../models/user");

/* GET users listing. */

router.get("/", function (req, res, next) {
    // check the db for the existence of the user
    // if it exists, set the cookie, otherwise, send the message unauthorized
    // the cookie should be unique for each user 
    /*
   1. on logging in, check the db for the existence of the username and password
   2. if it exists, set the token for the user inside a cookie
   3. on every request on the app.js, check for the existence of that cookie inside the db 
   
    {
        username: '',
        password: '',
        token: ''
    }
    */

  res.cookie("key", "key");
  return res.send("logged in");
});

module.exports = router;
