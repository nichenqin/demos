const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const router = express.Router();

require("../models/user");
const User = mongoose.model("users");

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/ideas",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  const errors = [];

  if (password !== password2) {
    errors.push({ msg: "Password not match" });
  }

  if (password.length < 4) {
    errors.push({ msg: "Password should longer than 4" });
  }

  if (errors.length) {
    res.render("users/register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email }).then(user => {
      if (user) {
        req.flash("error_msg", "Email already registed");
        res.redirect("/users/register");
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
              req.flash("success_msg", "You are now registered and can log in");
              res.redirect("/users/login");
            });
          });
        });
      }
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "logout success");
  res.redirect("/usrs/login");
});

module.exports = router;
