const express=require('express');

const userRequest=require('./user');

const app=express();

app.get("/",(request, response, next) =>{
  console.log("first Middleware", request.url, request.method);
  // response.send("<p>came from first middleware</p>");
  next();
});

app.post("/submit-details",(request, response, next) =>{
  console.log("second Middleware", request.url, request.method);
  response.send(`<h1>We will contact you shortly</h1>`);
});

app.use("/",(request, response, next) =>{
  console.log(" Middleware", request.url, request.method);
  response.send("<p>came from second middleware</p>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
