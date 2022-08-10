var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
var user = require("../models/user");
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  user.find().then((users) => {
    res.send(users)
  })
    .catch((err)=> {
      res.send(err);
    })

  });
  


router.post('/addUser', (req, res) => {
  console.log("requested body: ",req.body);
  console.log('in add user')

  let email = req.body.email;
  let password = req.body.password;

  if(req.body== null || req.body== undefined){

    res.status(400).send('enter user name and id!')
  }


  const doc = new user();
  doc.userId = email;
  doc.password = password;


  doc.save()

  res.redirect("/login")


});

router.delete('/:id',(req,res)=>{
  const delId = rew.params.id;
user
  .deleteOne({ _id: delId })
  .then((users) => {
    res.send(user);
  })
  .catch((err) => {
    res.send(err);
  });
  

})

module.exports = router;
