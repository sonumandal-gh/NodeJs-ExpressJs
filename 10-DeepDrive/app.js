const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser (use early)
app.use(bodyParser.urlencoded({ extended: true }));

// First middleware
app.use((req, res, next) => {
  console.log("first Middleware", req.url, req.method);
  next();
});

// Second middleware (logging only)
app.use((req, res, next) => {
  console.log("second Middleware", req.url, req.method);
  next();   // अब ये आगे जाने देगा
});

// Home route
app.get("/", (req, res) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("<h1>Welcome to complete coding</h1>");
});

// Contact form (GET)
app.get("/contact-us", (req, res) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Enter your detail:</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name"><br>
      <input type="email" name="email" placeholder="Enter your Email"/><br>
      <input type="submit" value="Submit">
    </form>
  `);
});

app.post("/contact-us", (req, res,next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  next();
})

app.use(bodyParser.urlencoded());

// Contact form (POST)
app.post("/contact-us", (req, res) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly!</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
