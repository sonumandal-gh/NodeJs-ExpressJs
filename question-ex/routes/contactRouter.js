const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathutil');

const contactRouter = express.Router();

// GET route for form page
contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

// POST route for form submission
contactRouter.post("/contact-submit", (req, res, next) => {
  console.log(req.body); // Form data terminal me print hoga
  res.sendFile(path.join(rootDir, "views", "contact-submit.html"));
});

module.exports = contactRouter;
