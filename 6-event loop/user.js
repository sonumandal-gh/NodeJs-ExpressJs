const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  console.log(request.url, request.headers, request.method);

  if (request.url === "/") {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Complete Coding</title></head>');
    response.write('<body><h1>Enter your details:</h1>');
    response.write('<form action="/submit-details" method="POST">');
    response.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    response.write('<label for="male">MALE</label>');
    response.write('<input type="radio" id="male" name="gender" value="male"/>');
    response.write('<label for="female">FEMALE</label>');
    response.write('<input type="radio" id="female" name="gender" value="female"/>');
    response.write('<br><input type="submit" value="Submit">');
    response.write('</form>'); 
    response.write("</body>");
    response.write('</html>');
    return response.end();
  } 
  else if (request.url === "/submit-details" && request.method === "POST") {
    const body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("Form Data:", parsedBody); // username=Sonu&gender=male

      fs.writeFileSync('user.txt', parsedBody);

      response.statusCode = 302;
      response.setHeader('Location', '/');
      return response.end();
    });
  } 
  else {
    // Default route (404 page)
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Complete Coding</title></head>');
    response.write('<body><h1>Page Not Found</h1></body>');
    response.write('</html>');
    response.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
