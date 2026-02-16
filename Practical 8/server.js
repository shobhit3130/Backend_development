const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.write('Hello world!');
    res.end();
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});