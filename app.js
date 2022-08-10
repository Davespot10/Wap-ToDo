var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fetch = require('node-fetch')
const authRoute= require('./routes/auth')
const mongoose = require("mongoose");
var user = require('./models/user');
let loginRoute=require("./routes/login")
let hompageRoute=require("./routes/homepage")
let alltaskRoute=require("./routes/alltask")
let complatedtaskRoute=require("./routes/complatedtask")
let pendingtaskRoute=require("./routes/pendingtask")
let delatedtaskRoute=require("./routes/delatedtask")
let addTaskRoute=require("./routes/addtask")
let editRoute = require('./routes/edit')






var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemRouter = require('./routes/item');
var todoRouter = require('./routes/todo');






var app = express();

// connect to mongoDb this
const dbUri = `mongodb+srv://merdevtodo:mershdev@cluster0.zbmdck4.mongodb.net/todo-database?retryWrites=true&w=majority`;
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/css', express.static('public/stylesheets'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todo',todoRouter);
app.use('/users', usersRouter);
app.use('/item', itemRouter);
app.use(loginRoute)
// app.use('/*',authRoute)
app.use(hompageRoute)
app.use(alltaskRoute)
app.use(complatedtaskRoute)
app.use(pendingtaskRoute)
app.use(delatedtaskRoute)
app.use(addTaskRoute)
app.use(editRoute)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
