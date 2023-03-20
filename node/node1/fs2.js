// 파일 쓰기
const fs = require('fs');
const data = 'Hello Node.js';

// fs.writeFile() : 비동기식으로 파일을 씀
fs.writeFile('text2.txt', data, 'utf-8', (err)=>{
    // text2.txt 파일을 생성하여 씀
    if(!err){
        console.log('저장완료 / 비동기식');
    }else{
        console.log('에러 발생');
    }
});

// fs.writeFileSync() : 동기식으로 파일을 씀
fs.writeFileSync('text3.txt', data, 'utf-8');
// text3.txt 파일을 생성하여 씀
console.log('저장완료 / 동기식')
