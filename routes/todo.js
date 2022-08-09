const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", function (req, res, next) {

  if(req.cookies.currentUser == undefined){
    res.redirect('/login')
    return;
  }

  let userId = req.cookies.currentUser.split(',')[0];
  Todo.find({userId:userId}).then(data =>{
    res.send(data);
  }).catch((err)=>{
    res.send(err);
  })
});


router.post("/", (req, res) => {
  
if(req.cookies.currentUser == undefined){
  res.redirect('/login')
  return;
}
  let userId = req.cookies.currentUser.split(',')[0];
  Todo.find({ userId: userId }).then((data)=>{
    const doc = new Todo();

    doc.userId = req.body.userId;
    doc.description = req.body.description;
    doc.title = req.body.title;
    doc.status = req.body.status;
    doc.category = req.body.category;
    doc.due_date = req.body.due_date;

    doc.save();
    res.send(doc);
  }).catch((err)=>{
    res.send(err);
  });




});


router.put('/update/status', (req, res) =>{
  console.log(req.body.todoName);
  Todo.updateOne({todoName:req.body.todoName,userId:req.cookies.currentUser.split(',')[0]},{status:req.body.status}).then((data)=>{
    res.send(data)
  }).catch((error)=>{
    res.statusCode(500).send(error)
  })
  
});



router.put('/update/title',(req,res)=>{
  let todoId = req.body.id;
  let userId = req.cookies.currentUser.split(",")[0];
  Todo.updateOne({ _id: todoId, userId: userId },{title : req.body.title}).then((data)=>{
    res.send(data);
  }).catch((err)=>{
    res.send(err);
  });
})


router.put("/update/category", (req, res) => {
  let todoId = req.body.id;
  let userId = req.cookies.currentUser.split(",")[0];
  Todo.updateOne(
    { _id: todoId, userId: userId },
    { category: req.body.category }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/update/description", (req, res) => {
  let todoId = req.body.id;
  let userId = req.cookies.currentUser.split(",")[0];
  Todo.updateOne(
    { _id: todoId, userId: userId },
    { description: req.body.description }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});


router.delete("/:id", (req, res) => {
  const delId = req.params.id;
  Todo
    .deleteOne({ _id: delId })
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});



module.exports = router;
