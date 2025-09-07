// sum.js
const sumRequestHandler = (req, res) => {
    let body = [];
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const bodyStr=Buffer.concat(body).toString();
        const data = new URLSearchParams(bodyStr);
        const bodyObj=Object.fromEntries(params);
        const result=Number(bodyObj.first)+Number(bodyObj.second);
        console.log(result);
        res.setHeader('Content-Type', 'text/html');
        res.write(`    
                <html>
                <head><title>ontact-type</title></head>
                <body>
                    <h1>Your sum is 78</h1>
                </body>
                </html>
            `);
    });
         return res.end();
    }

module.exports = { sumRequestHandler };