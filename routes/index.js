var express = require('express');
const mongoose = require("mongoose");
const user = require("../models/user");
var router = express.Router();

/* GET home page. */



router.get('/', async function (req, res, next) {

  const data = await user.find()


  res.render('login.ejs', {title: 'MerDevTodo'});

});

module.exports = router;
