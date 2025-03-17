const http = require('http');

http.createServer((req, res) => {
    res.write(`${new Date()}`);
    res.end();
}).listen(3001);