const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new Schema({
  
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
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
 

});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;