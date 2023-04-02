import React from "react";

function CreateUser({onChange, onCreate, username, email}){
    return(
        <>
            <p><input name="username" onChange={onChange} value={username} placeholder="이름을 입력해주세요." /></p>
            <p><input name="email" onChange={onChange} value={email} placeholder="이메일을 입력해주세요." /></p>
            <button onClick={onCreate}>등록하기</button>
        </>
    );
}

export default CreateUser;