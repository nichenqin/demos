const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.get("/register", (req, res) => {
  res.render("users/register");
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
    res.send("passed");
  }

  res.render("users/register");
});

module.exports = router;
