import React, { useRef, useState } from "react";

function MultiInput(){
    const [inputs, setInputs] = useState({
        userid: '',
        password: '',
        name: '',
        number: ''
    });

    const {userid, password, name, number} = inputs; // 비구조화 할당을 통해 값을 전달
    const first = useRef(); // useRef() : DOM선택, 컴포넌트 안에서 조회 / 수정 할 수 있는 변수 관리

    const onChange = (e)=>{
        const {name, value} = e.target; // e.target에 해당하는 name과 value를 가져옴
        // ex. name="userid" value={userid}
        setInputs({
            ...inputs, // ... : spread 문법(객체를 복사)
            [name]: value // name 키를 가진 값을 value로 설정
        });
    }

    const reset = ()=>{
        setInputs({
            userid: '',
            password: '',
            name: '',
            number: ''
        });
        first.current.focus(); // 해당 요소에 커서 발생
    }

    return(
        <>
            <p><input name="userid" onChange={onChange} value={userid} ref={first} placeholder="아이디를 입력해주세요."/></p>
            <p><input name="password" onChange={onChange} value={password} placeholder="비밀번호를 입력해주세요."/></p>
            <p><input name="name" onChange={onChange} value={name} placeholder="이름을 입력해주세요."/></p>
            <p><input name="number" onChange={onChange} value={number} placeholder="전화번호를 입력해주세요."/></p>
            <button onClick={reset}>지우기</button>
            <div>
                <b>userid : {userid}</b><br/>
                <b>password : {password}</b><br/>
                <b>name : {name}</b><br/>
                <b>number : {number}</b>
            </div>
        </>
    );
}
export default MultiInput;