var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var user = require('./models/user');

let loginRoute=require("./routes/login")
let hompageRoute=require("./routes/homepage")
let alltaskRoute=require("./routes/alltask")
let complatedtaskRoute=require("./routes/complatedtask")
let pendingtaskRoute=require("./routes/pendingtask")
let delatedtaskRoute=require("./routes/delatedtask")
let authRouter=require("./routes/auth")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemRouter = require('./routes/item');

var app = express();

// connect to mongoDb
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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.originalUrl !== "/login") {
    if (req.cookies.key !== "key") {
      res.redirect("/login");
      console.log(req.url);
      console.log("here");
    } else {
      next()
    }
  } else {
    // do validation here
    next();
  }
});


app.use("/login", authRouter);
app.use('/users', usersRouter);
app.use('/item', itemRouter);
app.use(loginRoute)

app.use(hompageRoute)
app.use(alltaskRoute)
app.use(complatedtaskRoute)
app.use(pendingtaskRoute)
app.use(delatedtaskRoute)

app.use("/login",hompageRoute)
app.use("/login",alltaskRoute)
app.use("/login",complatedtaskRoute)
app.use("/login",pendingtaskRoute)
app.use("/login",delatedtaskRoute)
app.use("/", indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
