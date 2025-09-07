const path = require('path');
const express = require("express");

const app = express();

// Routers import
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathutils");

// Middleware logger
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Parse form data (POST body)
app.use(express.urlencoded({ extended: true }));

// Routers use
app.use(userRouter);
app.use("/host", hostRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

