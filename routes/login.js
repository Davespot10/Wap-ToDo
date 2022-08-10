const express = require("express");
const user = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const TOKEN_SECRET =
  "aff4c949636f59083476a2ec64ad167b462eb7abeb2cf6d11bfc77b2e970931db96035dba90e33b800c0bc612ec0f6fbaccec4240d01180b31942f222229a844";

/* GET home page. */
router.get("/login", function (req, res, next) {
  res.render("login.ejs");
});
router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
router.post("/postlogin", async (req, res) => {
  console.log("incoming", req.body);
  let data = await user.find();

  if (
    data.some(
      (user) =>
        user.userId === req.body.username && user.password === req.body.password
    )
  ) {

      let userToken;

      try {
          //Creating jwt token
          userToken = jwt.sign(
              {userId: req.body.username, password: req.body.password},
              TOKEN_SECRET,
              {expiresIn: "1h"}
          );

      } catch (err) {
          console.log(err);
          const error = new Error("Error! Something went wrong in token creation");
         res.send(error)
      }
      console.log(userToken);
      res.cookie("currentUser", userToken);
      // res.end('success')
    res.redirect("/homepage");

  } else {
    res.redirect("/login");
  }
});

router.post("/postLogout", (req, res) => {
  res.clearCookie("currentUser");
  res.redirect("/login");
});
router.post("/postsignup", (req, res) => {
  res.redirect("/users/addUser");
});

module.exports = router;
