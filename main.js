const http = require('http');

http.createServer((req, res) => {
    res.write(`${new Date()}: ${process.pid}`);
    res.end();
}).listen(3001);