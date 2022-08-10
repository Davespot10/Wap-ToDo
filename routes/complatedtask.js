var express = require('express');
const Todo = require('../models/todo');
var router = express.Router();
router.get('/complatedtask', function(req, res, next) {
  Todo.find().sort({createdTime:-1}).then((result)=>{
    res.render('complatedtask.ejs', { title: 'Complated',todo:result})

  })
  .catch(()=>{
    console.log(err);

  }) 
 
  });

module.exports = router;

