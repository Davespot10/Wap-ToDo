var express = require('express');
var router = express.Router();
const Todo = require('../models/todo');
router.get('/pendingtask', function(req, res, next) {
  Todo.find().sort({createdTime:-1}).then((result)=>{
    res.render('pendingtask.ejs', { title: 'Pending',todo:result })

  })
  .catch(()=>{
    console.log(err);
  }) 
});

module.exports = router;