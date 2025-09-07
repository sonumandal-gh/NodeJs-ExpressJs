// app.js
const http = require('http');
const { requestHandler } = require('./handler');

const PORT = process.env.PORT || 3000;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});

