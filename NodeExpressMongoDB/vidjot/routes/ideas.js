const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { ensureAuthenticated } = require("../helpers/auth");

require("../models/idea");
const Idea = mongoose.model("ideas");

router.get("/", ensureAuthenticated, (req, res) => {
  Idea.find({ user: req.user.id })
    .sort({ date: "desc" })
    .then(ideas => {
      res.render("ideas/index", { ideas });
    });
});

router.get("/add", ensureAuthenticated, (req, res) => {
  res.render("ideas/add");
});

router.get("/edit/:id", ensureAuthenticated, (req, res) => {
  Idea.findById(req.params.id).then(idea => {
    res.render("ideas/edit", { idea });
  });
});

router.post("/", ensureAuthenticated, (req, res) => {
  const { title, details } = req.body;
  const errors = [];

  if (!title) {
    errors.push({ msg: "Please add title" });
  }

  if (!details) {
    errors.push({ msg: "Please add details" });
  }

  if (errors.length) {
    res.render("ideas/add", {
      errors,
      title,
      details
    });
  } else {
    const newUser = {
      title,
      details,
      user: req.user.id
    };

    new Idea(newUser).save().then(idea => {
      req.flash("success_msg", "video idea added");
      res.redirect("/");
    });
  }
});

router.delete("/:id", ensureAuthenticated, (req, res) => {
  Idea.findByIdAndRemove(req.params.id).then(() => {
    req.flash("success_msg", "video idea removed");
    res.redirect("/");
  });
});

router.put("/:id", ensureAuthenticated, (req, res) => {
  Idea.findById(req.params.id).then(idea => {
    idea.title = req.body.title;
    idea.details = req.body.details;
    idea.save().then(() => {
      req.flash("success_msg", "video idea updated");
      res.redirect("/");
    });
  });
});

module.exports = router;
