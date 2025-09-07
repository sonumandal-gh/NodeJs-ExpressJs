const http = require('http');
const userRequestHandler = require('./parsingRequest');

const server = http.createServer(userRequestHandler);

const PORT = 3100;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
