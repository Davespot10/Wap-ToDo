var express = require('express');
var router = express.Router();
router.get('/delatedtask', function(req, res, next) {
    res.render('delatedtask.ejs', { title: 'MerDevTodo' });
  });

module.exports = router;