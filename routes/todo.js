const express = require("express");
const { default: mongoose } = require("mongoose");
const app = require("../app");
const router = express.Router();
const Todo = require("../models/todo");



router.get("/", function (req, res) {
  let user = req.cookies.currentUser.split(',')[0];
  
  Todo.find({userId : user})
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  let userId = req.cookies.currentUser.split(',')[0];
// Character.create({ name: "Jean-Luc Picard" });
Todo.create({
  userId: userId,
  description: req.body.description,
  title: req.body.title,
  status: req.body.status,
  category: req.body.category,
  due_date: req.body.due_date,
})
  .then((todo) => {
    res.send(todo);
  })
  .catch((err) => {
    res.send(err);
  });

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
