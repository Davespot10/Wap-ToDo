var express = require('express');
var router = express.Router();

router.get('/alltask', function(req, res, next) {

// title:"Study Wap",
//description:"Plan to study Jquery and Dom Manipulation",
//plannedDate:"09-08-2022",
//catagory:"travel,sport,study,shopping"
//status:"pending,done,delated"


    res.render('alltask.ejs', { title: 'ALL Tasks',todo });
  });

module.exports = router;
