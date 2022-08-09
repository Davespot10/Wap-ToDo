var express = require('express');
var router = express.Router();
const Todo = require('../models/todo');
router.get('/deletedtask', function(req, res, next) {

  Todo.find().sort({createdTime:-1}).then((result)=>{
    res.render('deletedtask.ejs', { title: 'deleted',todo:result })

  })
  .catch(()=>{
    console.log(err);

  })
  });

module.exports = router;