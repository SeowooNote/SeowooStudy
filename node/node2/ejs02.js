const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
const port = 3000;

const router = express.Router();

// 127.0.0.1:3000/login
// localhost:3000/login
router.route('/login').post((req, res)=>{
    const userinfo = {userid: 'apple', userpw: '1234'}
    fs.readFile('ejs02.ejs', 'utf-8', (err, data)=>{
        if(!err){
            res.writeHead(200, {'content-type' : 'text/html'});
            res.end(ejs.render(data, userinfo));
        }else{
            console.log(err);
        }
    });
});

app.use('/', router);
app.all('*', (req, res)=>{
    res.status(404).send('<h2>페이지를 찾을 수 없습니다</h2>');
});
app.listen(port, ()=>{
    console.log(`${port}포트로 서버 실행중...`);
});