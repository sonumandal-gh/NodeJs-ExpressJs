const express = require('express');
const path = require('path');

const rootDir = require('./utils/pathutil');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Logger
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Parse POST body
app.use(express.urlencoded({ extended: true }));

// Routers
app.use(homeRouter);
app.use(contactRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
