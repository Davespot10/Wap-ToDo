const express = require("express");
const user = require("../models/user");
const router = express.Router();

/* GET home page. */
router.get("/login", function (req, res, next) {
  res.render("login.ejs");
});
router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
router.post("/postlogin", async (req, res) => {
  let data = await user.find();
    console.log(req.body);
  if (
    data.some(
      (user) =>
        {
           
            return user.userId === req.body.username && user.password === req.body.password
        }
    )
  ) {
    console.log('sucess');
    res.cookie("currentUser", req.body.username + "," + req.body.password);

    res.redirect("/homepage");
  } else {
    res.redirect("/login");
  }
});
router.post("/postsignup", (req, res) => {
  res.redirect("/login");
});

module.exports = router;
