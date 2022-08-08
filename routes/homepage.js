var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/homepage', function(req, res, next) {
    res.render("homepage.ejs");
})


module.exports = router;