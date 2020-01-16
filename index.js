const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>This is home</h1>");
        res.end();
    }
    else if (req.url == '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>This is student</h1>");
        res.end();
    }
    else {
        res.end('Invalid Request!');
    }
}).listen(5000, () => console.log("Server started"));