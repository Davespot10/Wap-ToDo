const express = require("express");
const user = require("../models/user");
const router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render("login.ejs");
})
router.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})
router.post("/postlogin",(req,res)=>{
    res.redirect("/homepage")
})
router.post("/postsignup",(req,res)=>{
    res.redirect("/login")
})

module.exports = router;
