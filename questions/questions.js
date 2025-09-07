// Q1: Simple Route Handling

// Apna server aise banao ki agar koi browser me alag-alag URL par jaye:
// / → “Welcome to Home Page” show ho
// /about → “This is About Page” show ho.
// /contact → “Contact us at: xyz@email.com” show ho.
// agar koi unknown URL ho to → “404 Page Not Found” show ho

// const http=require('http');
// const fs=require('fs');

// const server=http.createServer((req, res) =>{
//   console.log(req.url, req.headers, req.method);
//   res.setHeader("Content-Type", "text/html");

//   if(req.url==='/'){
//     res.write("<h1>Welcome to Home page</h1>")
//   }
//   else if(req.url==='/about'){
//     res.write("<h1>Welcome to About page</h1>")
//   }
//   else if(req.url==='/conact'){
//     res.write("<h1>contact us at: xyz@gmail.com</h1>")
//   }
//   else{
//     res.write('404 !');
//   }
//   res.end();
// });

// const PORT=3200;
// server.listen(PORT, () => {
//   console.log(`server running on address http://localhost:${PORT}`);
// });


// Q2: Method Handling

// Server me alag-alag method handle karo:
// Agar koi /submit route pe GET request bheje to → "This is GET request"
// Agar wahi /submit pe POST request bheje to → "This is POST request"

// const http=require('http');

// const server=http.createServer((req , res)=>{
//   res.setHeader('content-type' ,'text/html');

//   if(req.url==='/'){
//     res.write("<h1>Welcome to Home page</h1>");
//   }
//   else if(req.url==='/submit' && req.method==="GET"){
//     res.write("<h1> This is GET request</h1>")
//   }
//     else if(req.url==='/s' && req.method==="POST"){
//     res.write("<h1>This is POST request</h1>")
//   }else{
//     res.write('no responce');
//   }
//   res.end();
// });

// const PORT=3200;
// server.listen(PORT, () => {
//   console.log(`server running on address http://localhost:${PORT}`);
// });


// Q3: HTML Form Handling

// Ek chhoti HTML form response me send karo (name input + submit button).
// Jab user form submit kare (POST request bheje), to uska naam terminal me print ho jaye aur response me "Hello <name>" show ho.

// const http=require('http');

// const server=http.createServer((req , res)=>{
//   res.setHeader('content-type' ,'text/html');
  
//   if(req.url==='/' && req.method==='GET');{   
//   res.write(`
//     <form action="/submit" method="POST">
//     <input type="text" name="name" placeholder="enter your name"/>
//     <button type="submit">Submit</button>
//     `);
//   res.end();
//   }

//   if(req.url==="/submit" && req.method==="POST"){
//     let body="";
//     req.on("data", chunk=>{
//        body += chunk.toString();
//     });
//     req.on("end",()=>{
//       const name = body.split("=")[1];
//       console.log("user name:", name);
//       res.write(`<h1>Hello ${name}</h1>`);
//       // req.end();
//     });
//   }
// });

// const PORT=3200;
// server.listen(PORT, () => {
//   console.log(`server running on address http://localhost:${PORT}`);
// });


//  -----------------------------------> express <---------------------
// const express=require('express');

// const app=express();

// app.use((req, res, next) =>{
//   console.log("first Dummy Middlewer", req.url ,req.method);
// next();
// });

// app.use((req, res, next) =>{
//   console.log("second Dummy Middlewer", req.url ,req.method);
// next();
// });

// // app.use((req, res, next) =>{
// //   console.log("Third Dummy Middlewer", req.url ,req.method);
// //   res.send("<h1>Welcome to vgu college</h1>");
// // });

// app.get('/',(req, res, next) =>{
//   console.log("hendling / for get", req.url ,req.method);
//   // res.send("<H1>Welcome to vgu</H1>");
// });

// app.get('/contact-us',(req, res, next) =>{
//   console.log("hendling contact us", req.url ,req.method);
  
//   res.send(`
//     <h1>Please give your details</h1>
//     <form action="/contact-us" method="POST">
//         <input type="text" name="name" placeholder="Enter your name" />
//         <input type="email" name="email" placeholder="Enter your Email" />
//         <button type="submit">Submit</button>
//     </form>
// `);

// });

// app.post("/contact-us",(req, res, next)=>{
//   console.log("Hendling contact us for post", req.url, req.method);
//   res.send('<h1>Good bye sonu</h1>')3
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });


// Q1.
// Create a new project:
// Install express and nodemon.
// Add a middleware that logs the current time for every request.
// Create a GET route /about that returns some text like "This is About Page".
// Add a route /services that returns a list of services in HTML format.
// Add a route /download that lets user download a text file (info.txt).

