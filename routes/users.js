var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
var user = require("../models/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  user.find({}, (err, users) => {
    res.send(users);
  });
  
});

router.post('/', (req, res) => {
  console.log("requested body: ",req.body);
  if(req.body== null || req.body== undefined){

    res.status(400).send('enter user name and id!')
  }
  const doc = new user();
  doc.userId = req.body.userId;
  doc.password = req.body.password;

  doc.save();
  res.send('user saved succesfully')
})

module.exports = router;
