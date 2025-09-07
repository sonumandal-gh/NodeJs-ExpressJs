const http=require('http');

const server=http.createServer((req, res)=>{
  console.log("hello sonu! Server is work");
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from your node.js server !');
});

server.listen(3100,() =>{
   console.log(`Servier running at http://localhost:3100`);
});