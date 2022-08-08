var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup.ejs', { title: 'MerDevTodo' });
});

module.exports = router;
