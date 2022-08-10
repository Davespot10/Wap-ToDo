const express = require("express");
const user = require("../models/user");
const router = express.Router();

/* GET home page. */
router.get("/login", function (req, res, next) {
  res.render("login.ejs");
});
router.get("/signup", (req, res) => {

  res.redirect("users");
});
router.post("/postlogin", async (req, res) => {
  let data = await user.find();

  if (
    data.some(
      (user) =>
        user.userId === req.body.username && user.password === req.body.password
    )
  ) {
    res.cookie("currentUser", req.body.username + "," + req.body.password);
    res.redirect("/homepage");
  } else {
    res.redirect("/login");
  }
});

router.post('/postLogout',(req,res)=>{
    res.clearCookie("currentUser");
    res.redirect('/login');
})
router.post("/postsignup", (req, res) => {
  res.redirect("/login");
});



//jwt.io/#debugger-io?token=eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1lcmhhIEF5ZWxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.PeXrOEB16HinSXibSJqkvJ_j-Rg0VQHbeap9gc6GDsJlVkcLHWmCcy6aA6wiKSfe

https: module.exports = router;
