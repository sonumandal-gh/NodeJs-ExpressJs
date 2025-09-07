const path = require("path");
const express = require("express");
const hostRouter = express.Router();

const rootDir = require("../utils/pathutils");

// GET /host/add-home
hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));   
});

// POST /host/add-home (form submit hone ke baad)
hostRouter.post("/add-home", (req, res) => {
  console.log("Form submitted:", req.body);

  // ✅ Success ke baad redirect
  res.redirect("/host/homeadded");
});

// GET /host/home
hostRouter.get("/home", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// ✅ GET /host/homeadded (direct access bhi kaam karega)
hostRouter.get("/homeadded", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "homeadded.html"));
});

module.exports = hostRouter;
