var express = require('express');
const Todo = require('../models/todo');
var router = express.Router();
router.get('/completedtask', function(req, res, next) {
  Todo.find().sort({createdTime:-1}).then((result)=>{
    res.render('completedtask.ejs', { title: 'completed',todo:result})

  })
  .catch(()=>{
    console.log(err);

  }) 
 
  });

module.exports = router;

