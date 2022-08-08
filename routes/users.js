var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
var user = require("../models/user");

/* GET users listing. */
router.get('/', function(req, res, next) {

  user.find().then((users)=>{
    res.send(users);
  }).catch((err)=>{
    console.log(err);
  })
  
  
});

router.post('/', (req, res) => {
  console.log("requested body: ",req.body);
  if(req.body== null || req.body== undefined){
    res.status(400).send('enter user name and id!')
  }
  const doc = new user();
  doc.userId = req.body.userId;
  doc.password = req.body.password;

  doc.save().then((users)=>{
    res.send(users);
  }).catch((err)=>{
    res.send(err);
  })
  
});

router.delete("/:id", (req, res) => {
  console.log("hello");
  const delId = req.params.id;
  console.log(delId);

  user
    .deleteOne({ _id: delId })
    .then((users) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/",(req,res)=>{
  
})

module.exports = router;
