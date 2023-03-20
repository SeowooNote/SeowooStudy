module.exports = (app, fs)=>{

    // http://localhost:3000
    app.get('/', (req, res)=>{
        res.render('index.ejs', {
            length: 10
        })
    });

    // http://localhost:3000/about
    app.get('/about', (req, res)=>{
        res.render('about.html');
    })

    // http://localhost:3000/list
    app.get('/list', (req, res)=>{
        // __dirname : 현재 작업하는 파일 (현재 위치에 폴더를 의미)
        // __filename : 파일명
        fs.readFile(__dirname + '/../data/member.json', 'utf8', (err, data)=>{
            // utf16 : 모바일 앱에서 사용
            if(!err){
                console.log(data);
                res.writeHead(200, {'content-type' : 'text/json;charset=utf-8'});
                res.end(data);
            }else{
                console.log(err);
            }
        });
    });

    // http://localhost:3000/getMember/apple
    app.get('/getMember/:userid', (req, res)=>{
        fs.readFile(__dirname + '/../data/member.json', 'utf8', (err, data)=>{
            if(!err){
                const member = JSON.parse(data);
                // JSON형식으로 불러옴, 이렇게 하지 않으면 일반적인 텍스트형으로 가져오게 됨
                res.json(member[req.params.userid]);
            }else{
                console.log(err);
            }
        });
    });

    // http://localhost:3000/joinMember/apple1 추가
    app.post('/joinMember/:userid', (req, res)=>{
        const result = {}; // 현재 데이터를 추가하는 상태를 저장하는 객체지향 공간
        const userid = req.params.userid;

        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 100; // 실패는 100, 성공은 200
            result["msg"] = "매개변수가 전달되지 않음";
            res.json(result);
            return false;
        }

        // 아이디 검색 검사
        fs.readFile(__dirname + '/../data/member.json', 'utf8', (err, data)=>{
            const member = JSON.parse(data);
            if(member[userid]){
                result["success"] = 101; // 101 : 중복
                result["msg"] = "중복된 아이디";
                res.json(result);
                return false;
            }

            console.log(req.body); // 확인

            member[userid] = req.body; // 아이디 / 패스워드
            fs.writeFile(__dirname + '/../data/member.json', JSON.stringify(member, null, '\t'), 'utf8', (err, data)=>{
                // '\t' : 줄바꿈
                if(!err){
                    result["success"] = 200;
                    result["msg"] = "성공";
                    res.json(result);
                }else{
                    console.log(err);
                }
            });
        });
    });

    // 회원수정
    // http://localhost:3000/updateMember/apple1
    app.put('/updateMember/:userid', (req, res)=>{
        const result = {};
        const userid = req.params.userid;

        // 입력 필수 항목을 검사하는 함수
        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 100; // 실패는 100 성공은 200
            result["msg"] = "매개변수가 전달되지 않음";
            res.json(result);
            return false;
        }

        // 수정하기 위해 데이터 파일을 읽기
        fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data)=>{
            if(!err){
                const member = JSON.parse(data); // JSON 파일을 불러와서 member에 저장
                member[userid] = req.body; // 전달한 정보
                fs.writeFile(__dirname + "/../data/member.json", JSON.stringify(member, null, '\t'), 'utf8', (err, data)=>{
                    if(!err){
                        result["success"] = 200;
                        result["msg"] = "성공";
                        res.json(result);
                    }else{
                        console.log(err);
                    }
                });     
            }else{
                console.log(err);
            }
        });
    })

    // 회원정보 삭제
    // http://localhost:3000/deleteMember/berry
    app.delete('/deleteMember/:userid', (req, res)=>{
        let result = {};

        fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data)=>{
            const member = JSON.parse(data);

            if(!member[req.params.userid]){
                result["success"] = 102;
                result["msg"] = "사용자를 찾을 수 없음";
                res.json(result);
                return false;
            }

            delete member[req.params.userid]; // 데이터를 삭제
            fs.writeFile(__dirname + '/../data/member.json', JSON.stringify(member, null, '\t'), 'utf8', (err, data)=>{
                    result["success"] = 200;
                    result["msg"] = "성공";
                    res.json(result);
            });
        });
    })
}