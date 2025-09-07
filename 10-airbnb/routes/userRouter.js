const path = require("path");
const express = require("express");
const userRouter = express.Router();

const rootDir = require("../utils/pathutils");

// GET /
userRouter.get("/", (req, res) => {
  console.log("✅ Home route hit!");
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
