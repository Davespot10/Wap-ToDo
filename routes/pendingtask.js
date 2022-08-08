var express = require('express');
var router = express.Router();
router.get('/pendingtask', function(req, res, next) {
    res.render('pendiingtask.ejs', { title: 'MerDevTodo' });
  });

module.exports = router;