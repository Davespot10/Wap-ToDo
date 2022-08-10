var express = require('express');
var router = express.Router();
const Todo = require('../models/todo');
router.get('/delatedtask', function(req, res, next) {

  Todo.find().sort({createdTime:-1}).then((result)=>{
    res.render('delatedtask.ejs', { title: 'Delated',todo:result })

  })
  .catch(()=>{
    console.log(err);

  })
  });

module.exports = router;