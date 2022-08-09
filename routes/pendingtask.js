var express = require('express');
var router = express.Router();
router.get('/pendingtask', function(req, res, next) {
    res.render('pendingtask.ejs', { title: 'Pending',todo });
  });

module.exports = router;