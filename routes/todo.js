const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", function (req, res, next) {

  // if(req.cookies.currentUser == undefined){
  //   res.redirect('/login')
  //   return
  // }

  // let userId = req.cookies.currentUser.split(',')[0]
  Todo.find({userId:'merha'}).then(data =>{
    res.send(data);
  })


});


router.post("/", (req, res) => {
  console.log("requested body: ", req.body);

//   if (req.body == null || req.body == undefined) {
//     res.status(400).send("enter user name and id!");
//   }

  if (req.body == null || req.body == undefined) {
    res.status(400).send("enter user name and id!");
  }

  const doc = new Todo();
  doc.todoName = req.body.todoName;
  doc.userId = req.body.userId;
  doc.description = req.body.description;
  doc.title = req.body.title;
  doc.status = req.body.status;
  doc.category = req.body.category;
  doc.due_date = req.body.due_date;
  // doc.todoId = req.body.todoId;

  doc.save();
  res.send(doc);
});

router.put('/update/status', (req, res) =>{
  console.log(req.body.todoName);
  Todo.updateOne({todoName:req.body.todoName,userId:req.cookies.currentUser.split(',')[0]},{status:req.body.status}).then((data)=>{
    res.send(data)
  }).catch((error)=>{
    res.statusCode(500).send(error)
  })
  
})


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
