const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo");
var jwt = require('jwt-decode')
var jwtsign = require('jsonwebtoken')
var cors = require('cors')

var url = require('url')

router.use(cors({
  origin:'*'
}))

router.get("/", function (req, res, next) {


  // var tirki = jwtsign.sign({name:'merha'},'secret')
  // console.log("token",tirki);

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZXJoYSIsInBhc3N3b3JkIjoibWVyc2giLCJpYXQiOjE2NjAxNTk1MTMsImV4cCI6MTY2MDE2MzExM30.jayuacvzb9Hw1IigEUZR_pZwmCi2HUC7HhQGBdI9qlM";
  console.log("current", token);
  var decodeToken = jwt(token);
  
  Todo.find({ userId: decodeToken.userId }).then((data) => {
    // if (req.cookies.currentUser == undefined) {
    //   res.redirect("/login");
    //   return;
    // }

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
  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZXJoYSIsInBhc3N3b3JkIjoibWVyc2giLCJpYXQiOjE2NjAxNTk1MTMsImV4cCI6MTY2MDE2MzExM30.jayuacvzb9Hw1IigEUZR_pZwmCi2HUC7HhQGBdI9qlM";
  // console.log("current", token);
  

  let token = req.cookies.currentUser;
  var decodeToken = jwt(token);
  Todo.find({ userId: decodeToken.userId }).then((data)=>{
    // console.log(req.body);
    const doc = new Todo();
    doc.userId = decodeToken.userId;
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
  console.log("llllllllllllll");
  // var params = url.parse(req.query);
  // console.log(params);
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

router.delete("/done", (req, res) => {
  const delId = req.body.id;
  Todo.updateOne({ _id: delId }, { status: "done" })
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete('/remove',(req,res)=>{
    const delId = req.body.id;
    Todo.remove({ _id: delId }).then((todo)=>{
      res.send(todo);
    })
    .catch((err)=>{
      res.send(err);
    })
})



module.exports = router;
