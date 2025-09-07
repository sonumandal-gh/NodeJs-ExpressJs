// handler.js
const { sumRequestHandler } = require('./sum'); // ✅ Corrected path

const requestHandler = (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to Calculator</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
            </html>
        `);
        return res.end();
    } 
    else if (req.url.toLowerCase() === '/calculator' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Calculator</h1>
                <form action="/sum" method="POST">
                    <input type="text" placeholder="First number" name="first" required />
                    <input type="text" placeholder="Second number" name="second" required />
                    <button type="submit">Sum</button>
                </form>
            </body>
            </html>
        `);
        return res.end();
    }
    else if (req.url.toLowerCase() === '/sum' && req.method === 'POST') {
        return sumRequestHandler(req, res);
    }

    // 404 Page
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>404</title></head>
        <body>
            <h1>404 Page Not Found</h1>
            <a href="/">Go Home</a>
        </body>
        </html>
    `);
    res.end();
};

module.exports = { requestHandler };