var express = require('express');
var router = express.Router();

router.get('/alltask', function(req, res, next) {
    res.render('alltask.ejs', { title: 'MerDevTodo' });
  });

module.exports = router;
