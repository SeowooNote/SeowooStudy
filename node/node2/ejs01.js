const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
const port = 3000;

const router = express.Router(); // Router 객체 생성

// 127.0.0.1:3000/ejstest
// localhost:3000/ejstest
router.route('/ejstest').post((req, res)=>{
    fs.readFile('ejs01.ejs', 'utf-8', (err, data)=>{
        if(!err){
            res.writeHead(200, {'content-type' : 'text/html'});
            res.end(ejs.render(data)); // render() : 메소드의 매개변수에 전달하고자 하는 데이터를 입력하여 전달
        }else{
            console.log(err);
        }
    });
});

app.use('/', router); // Router 사용에 대한 정의
// Router 예외처리
app.all('*', (req, res)=>{
    res.status(404).send('<h2>페7지를 찾을 수 없습니다.</h2>');
});
app.listen(port, ()=>{
    console.log(`${port}포트로 서버 실행중...`);
})