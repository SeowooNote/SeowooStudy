const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile); // ejs 파일을 html 파일로 변환
//  views에 관련된 엔진을 등록, ejs파일이 자동으로 html로 변환, views 폴더 생성이 공식
app.use(bodyParser.urlencoded({extended: false}));

const module1 = require('./router/module1')(app, fs);

app.listen(port, ()=>{
    console.log(`${port}번 포트로 서버 실행중...`);
})