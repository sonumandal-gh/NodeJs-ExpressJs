const http = require('http');
const fs = require('fs');

const userRequest =((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Complete Coding</title></head>
      <body>
        <h1>Enter your detail:</h1>
        <form action="/submit-details" method="POST">
          <input type="text" name="Username" placeholder="Enter your name"><br>
          <label> Male </label>
          <input type="radio" name="gender" value="male"/>
          <label> Female </label>
          <input type="radio" name="gender" value="female"/>
          <br><input type="submit" value="Submit">
        </form>
      </body>
      </html>
    `);
    return res.end();
  }

  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Form Data:", body); // e.g. Username=Sonu&gender=male

      fs.writeFileSync("user.txt", body);
      res.statusCode = 302;
      res.setHeader("Location", "/"); // redirect back to home
      return res.end();
    });
  }

  // Default response
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>404 Page Not Found</h1>");
  res.end();
});

module.exports=userRequest;
