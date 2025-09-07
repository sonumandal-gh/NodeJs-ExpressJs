// const http=require('http');

// const server = http.createServer((request, responce)=>{
//    console.log(request.url, request.headers, request.method);
//    responce.setHeader('content-type', 'tex/html');
//    responce.write('<html>');
//    responce.write("<head><title>Welcome sonu</title> </head>");
//    responce.write("/html");
//    responce.end();
// });

// const PORT =3000;
// server.listen(PORT, () => {
//   console.log(`server running on address http://localhost:${PORT}`);
// });


// const http = require('http');

// const server = http.createServer((request, response) => {
//   console.log(request.url, request.headers, request.method);
//   if(request.url === "/"){
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>Welcome to Home page</title></head>');
//     response.write('<body><h1>Home Page</h1></body>');
//     response.write('</html>');
//     return response.end();
//   }
//   else if(request.url === "/products"){
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>Welcome to Product page</title></head>');
//     response.write('<body><h1>Products Page</h1></body>');
//     response.write('</html>');
//     return response.end();
//   }

//   // Default route (404 page)
//   response.setHeader('Content-Type', 'text/html');
//   response.write('<html>');
//   response.write('<head><title>Page Not Found</title></head>');
//   response.write('<body><h1>404 - Page Not Found</h1></body>');
//   response.write('</html>');
//   response.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



// const http = require('http');
// const fs=require('fs');

// const server = http.createServer((request, response) => {
//   console.log(request.url, request.headers, request.method);
//   if(request.url === "/"){
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>Complet Coading</title></head>');
//     response.write('<body><h1>Enter your detail:</h1>');
//     response.write('<form action="/Submit-details" method="POST">');
//     response.write('<input type="text" name="Username" placeholder="enter your name"><br>');
//     response.write('<label for="male"> MAIL </label>');
//     response.write('<input type="radio" id="mail" name="gender" value="mail"/>');
//     response.write('<label for="female"> FEMALE </label>');
//     response.write('<input type="radio" id="female" name="female" value="female"/>');
//     response.write('<br><input type="submit" value="Submit">');
//     response.write('</form>')
//     response.write("</body>");
//     response.write('</html>');
//     return response.end();
//   }else if(request.url ==="/submit-details" && request.method=="POST"){
//     fs.writeFileSync('user.txt', 'Sonu amndal');
//     response.statusCode=302;
//     response.setHeader('loction', '/');
//   }

//   // Default route (404 page)
//   response.setHeader('Content-Type', 'text/html');
//   response.write('<html>');
//   response.write('<head><title>Complite coding</title></head>');
//   response.write('<body><h1>Welcome to sonu kumar mandal for submition</h1></body>');
//   response.write('</html>');
//   response.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// Q. create a page that show a navigation bar of myntra with the following links: home, man ,women, kids, card.

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.headers, req.method);

//   res.setHeader('Content-Type', 'text/html');

//   // Navbar HTML
//   const navbar = `
//     <nav>
//       <ul>
//         <li><a href="/home">Home</a></li>
//         <li><a href="/men">Men</a></li>
//         <li><a href="/women">Women</a></li>
//         <li><a href="/kids">Kids</a></li>
//         <li><a href="/cart">Cart</a></li>
//       </ul>
//     </nav>
//   `;

//   if (req.url === "/") {
//     res.write('<html>');
//     res.write('<head><title>code with sonu</title></head>');
//     res.write('<body>');
//     res.write('<h1>Hello Sonu</h1>');
//     res.write('</body></html>');
//     res.end();
//   }
//   else if (req.url === "/home") {
//     res.write('<html>');
//     res.write('<head><title>code with sonu</title></head>');
//     res.write('<body>');
//     res.write('<h1>Welcome to Home page</h1>');
//     res.write('</body></html>');
//     res.end();
//   }
//   else if (req.url === "/men") {
//     res.write('<html>');
//     res.write('<head><title>code with sonu</title></head>');
//     res.write('<body>');
//     res.write('<h1>Welcome to Men Section</h1>');
//     res.write('</body></html>');
//     res.end();
//   }
//   else if (req.url === "/women") {
//     res.write('<html>');
//     res.write('<head><title>code with sonu</title></head>');
//     res.write('<body>');
//     res.write('<h1>Welcome to Women Section</h1>');
//     res.write('</body></html>');
//     res.end();
//   }
//   else if (req.url === "/kids") {
//     res.write('<html>');
//     res.write('<head><title>code with sonu</title></head>');
//     res.write('<body>');
//     res.write('<h1>Welcome to Kids Section</h1>');
//     res.write('</body></html>');
//     res.end();
//   }
//   else if (req.url === "/cart") {
//     res.write('<html>');
//     res.write('<head><title>code with sonu</title></head>');
//     res.write('<body>');
//     res.write('<h1>Welcome to Cart Section</h1>');
//     res.write('</body></html>');
//     res.end();
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


