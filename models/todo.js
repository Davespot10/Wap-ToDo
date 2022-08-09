const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new Schema({
  todoId: {
    type: String,
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
    required: true
  },
  title: {
    type: String,
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
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;