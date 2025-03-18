const http = require('http');

http.createServer((req, res) => {
    console.log(new Date())
    res.write(`${new Date()}: ${process.pid}`);
    res.end();
}).listen(process.env.PORT || 3002);