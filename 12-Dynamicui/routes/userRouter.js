// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();


const { registerHome } = require("./hostRouter"); // fixed

userRouter.get("/", (req, res, next) => {
  console.log(registerHome);
  res.render('home',{registerHome: registerHome, pageTitle: 'airbnb Home'});
});

module.exports = userRouter;
