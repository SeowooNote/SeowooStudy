// 에러 발생
const fs = require('fs');

// 비동기식 파일 읽을때 에러 발생
fs.readFile('text4.txt', 'utf-8', (err, data)=>{
    // 비동기식의 예외 처리 (if문 사용)
    if(!err){
        console.log(data);
    }else{
        console.log('에러발생 / 비동기식')
    }
})

// 동기식 파일 읽을때 에러 발생
// 동기식의 예외 처리 (try catc문 사용)
try{
    const text = fs.readFileSync('text4.txt', 'utf-8');
    console.log(`동기식으로 읽음 : ${text}`)
}catch(e){
    console.log('에러발생 / 동기식')
}
console.log('프로그램 종료')