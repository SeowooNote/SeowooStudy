// 파일 읽기
// npm i fs
const fs = require('fs');

// fs.readFile() : 비동기식으로 파일을 읽음 (순서가 없음, 속도가 빠름)
fs.readFile('text1.txt', 'utf-8', (err, data)=>{
    if(!err){
        console.log(`비동기식으로 파일을 읽음 : ${data}`)
    }else{
        console.log(err);
    }
});

// fs.readFileSync() : 동기식으로 파일을 읽음 (순서가 있음, 속도가 느림)
const text = fs.readFileSync('text1.txt', 'utf-8');

console.log(`동기식으로 읽음 : ${text}`);

// 동기식 vs 비동기식 : 동기식과 비동기식을 둘다 실행할 때, 동기식이 먼저 실행되어 출력됨