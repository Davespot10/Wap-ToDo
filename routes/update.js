const express = require("express");
const { default: mongoose, model } = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo");



router.put("/update/todo", (req, res) => {
    let id = req.body.id;
    let category = 
    let
  Todo.updateOne(
    { _id: id, userId: req.cookies.currentUser.split(",")[0] },
    { status: req.body.status }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.statusCode(500).send(error);
    });
});

router.put("/title", (req, res) => {
  let id = req.body.id;
  let userId = req.cookies.currentUser.split(",")[0];
  Todo.updateOne(
    { _id: id, userId: userId },
    { title: req.body.title, category: req.body.category ,}
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/category", (req, res) => {
  let id = req.body.id;
  let userId = req.cookies.currentUser.split(",")[0];
  Todo.updateOne(
    { _id: id, userId: userId },
    { category: req.body.category },
    { description: req.body.description }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/description", (req, res) => {
  let id = req.body.id;
  let userId = req.cookies.currentUser.split(",")[0];
  Todo.updateOne(
    { _id: id, userId: userId },
    { description: req.body.description }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
