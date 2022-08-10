const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo");
var jwt = require('jwt-decode')
var jwtsign = require('jsonwebtoken')

var url = require('url')

router.get("/", function (req, res, next) {


  // var tirki = jwtsign.sign({name:'merha'},'secret')
  // console.log("token",tirki);

  let token = req.cookies.currentUser;
  var decodeToken = jwt(token);
  Todo.find({ userId: decodeToken.userId }).then((data) => {
    if (req.cookies.currentUser == undefined) {
      res.redirect("/login");
      return;
    }

    // let userId = req.cookies.currentUser.split(",")[0];
    Todo.find({ userId: decodeToken.userId })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
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
    doc.status = "pending";
    doc.category = req.body.category;
    doc.due_date = req.body.due_date;

    doc.save();
    res.redirect("/homepage");
  }).catch((err)=>{
    res.send(err);
  });
});


router.put('/', (req, res) =>{
  var params = url.parse(req.query);
  console.log(params);
  description = req.body.description;
  title = req.body.title;
  category = req.body.category;
  due_date = req.body.due_date;
  id = req.body.id;

  Todo.updateOne(
    {
       _id : req.body.id
    },
    {
      description: description,
      title: title,
      category: category,
      due_date: due_date,
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.statusCode(500).send(error);
    });
  
});
//esh



// router.put('/update/title',(req,res)=>{
//   let todoId = req.body.id;
//   let userId = req.cookies.currentUser.split(",")[0];
//   Todo.updateOne({ _id: todoId, userId: userId },{title : req.body.title}).then((data)=>{
//     res.send(data);
//   }).catch((err)=>{
//     res.send(err);
//   });
// })


// router.put("/update/category", (req, res) => {
//   let todoId = req.body.id;
//   let userId = req.cookies.currentUser.split(",")[0];
//   Todo.updateOne(
//     { _id: todoId, userId: userId },
//     { category: req.body.category }
//   )
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// router.put("/update/description", (req, res) => {
//   let todoId = req.body.id;
//   let userId = req.cookies.currentUser.split(",")[0];
//   Todo.updateOne(
//     { _id: todoId, userId: userId },
//     { description: req.body.description }
//   )
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });


router.delete("/", (req, res) => {
  const delId = req.body.id;
  Todo
    .updateOne({ _id: delId },{status : "deleted"})
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});



module.exports = router;
