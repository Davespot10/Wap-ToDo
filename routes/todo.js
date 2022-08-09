const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", function (req, res, next) {

    

    // let user = here you get the user from the cookie
    // let user_id

    // ////////
//     Todo.find({userId: user_id})
//     .catch((err)=>{
//         res.send(err);
//     });

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
  doc.todoId = req.body.todoId;



  doc.save();

  res.send(doc);
});



  


// user
//   .deleteOne({ _id: delId })
//   .then((users) => {
//     res.send(user);
//   })
//   .catch((err) => {
//     res.send(err);
//   });



module.exports = router;
