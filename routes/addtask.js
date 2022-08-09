var express = require('express');
var router = express.Router();

router.get('/addtask', function(req, res, next) {

    res.render('addtask.ejs', { title: 'Add Task', todo });
  });

  router.post('/posttask', function(req, res, next) {
    res.redirect("/homepage");

  });

module.exports = router;