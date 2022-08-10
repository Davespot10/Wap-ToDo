var express = require('express');
var router = express.Router();
var Todo=require("../models/todo")

router.get('/edittask', function(req, res, next) {
    res.render('edit.ejs', { title: 'Edittask'});
  });

  router.post('/todo', function(req, res, next) {
    res.redirect("/homepage");

  });
  router.get('/edittask/:id',(req,res)=>{
   
    const id=req.params.id;
    console.log("set id",id);
    Todo.findById(id)
    .then(result=>{
      res.render("edit.ejs",{todo:result})
    })
    .catch(err=>{
      console.log(err);
    });

  })
module.exports = router;