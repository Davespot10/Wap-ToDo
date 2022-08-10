// dave's update
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const user = require("../models/user");
const TOKEN_SECRET= "aff4c949636f59083476a2ec64ad167b462eb7abeb2cf6d11bfc77b2e970931db96035dba90e33b800c0bc612ec0f6fbaccec4240d01180b31942f222229a844";

router.use("/", async (req, res, next) => {


    console.log("in authorization route")

    const token = req.cookies.currentUser;




    if (token) {

        jwt.verify(token, TOKEN_SECRET, function (err, decoded){

            if (err){
                console.log("Token not valid : Error thrown ");
                res.redirect("login")
            } else {
                console.log("Token is valid");

                next()
            }
        });

    }

    else {

    res.send("no token")
    }

   // let data = await user.find( {"userId": userInToken.valueOf("").userId });

        });

module.exports = router;
