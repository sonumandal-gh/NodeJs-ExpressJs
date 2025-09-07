// Core Module
const path = require('path');

// External Module
const express = require('express');

// Local Modules
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");  // <-- FIXED
const rootDir = require("./utils/pathUtil");

const app = express();
app.set('view engine', 'ejs');
app.set('views','views');

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(rootDir, 'public')));

// Routers
app.use(userRouter);
app.use(hostRouter);

// 404 Page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
