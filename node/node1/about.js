// npm i http
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// http://127.0.0.1:3000
// 서버를 사용하는 패턴 : (req(요청), res(응답)) (매개변수 req 와 res)
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});