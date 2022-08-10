var express = require('express');
var router = express.Router();
const Todo = require('../models/todo');

router.get('/alltask', function(req, res, next) {
  Todo.find().sort({createdTime:-1}).then((result)=>{
    res.render('alltask.ejs', { title: 'ALL Tasks',todo:result})

  })
  .catch(()=>{
    console.log(err);

  }) 
 
  });

  

module.exports = router;
