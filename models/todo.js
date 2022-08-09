const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new Schema({
  todoId: {
    type: String,
<<<<<<< HEAD
    required: true
  },
  todoName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  due_date: {
    type: String,
=======
    required: true,
  },
  todoName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  due_date : {
    type: Date,
>>>>>>> 9a75996cfd0bba934bef6462a9e283586e1eb37e
    required: true
  },
  title: {
    type: String,
<<<<<<< HEAD
    required: true
  },
  status: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
=======
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
>>>>>>> 9a75996cfd0bba934bef6462a9e283586e1eb37e
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;