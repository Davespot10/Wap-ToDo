var express = require('express');
var router = express.Router();
router.get('/complatedtask', function(req, res, next) {
    res.render('complatedtask.ejs', { title: 'MerDevTodo' });
  });

module.exports = router;