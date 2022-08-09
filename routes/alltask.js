var express = require("express");
var router = express.Router();
const Todo = require("../models/todo");

router.get("/alltask", function (req, res, next) {
  let userId = req.cookies.currentUser.split(",")[0];
  Todo.find({ userId: userId }).then((todo) => {
    Todo.find()
      .then((todo) => {
        res.render("alltask.ejs", { title: "ALL Tasks", todo });
      })
      .catch((err) => {
        res.send(err);
      });
  });
});

module.exports = router;
