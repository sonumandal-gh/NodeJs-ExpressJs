// Core Module
const path = require('path');

// External Module
const express = require('express');

// Create Router
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

// Store registered homes
const registerHome = [];

// GET route - contact form
hostRouter.get("/contact-us", (req, res, next) => {
  res.render('contact-us',{registerHome: registerHome, pageTitle: 'Register section'});
});

// POST route - form submit
hostRouter.post("/contact-submit", (req, res, next) => {
  console.log('Home Registration successful for: ', req.body, req.body.HouseName);

  // Save data
  registerHome.push({ houseName: req.body.HouseName });

  res.render('contact-submit',{registerHome: registerHome, pageTitle: 'submit'});
});

// Export router and data
module.exports = { hostRouter, registerHome };
