var express = require('express');
var router = express.Router();



router.use('/', (req,res,next)=>{



    if (req.cookies.currentUser){


       next();
    }

    else {
        console.log("in else ")
        res.render("login.ejs");
    }

})


module.exports = router;