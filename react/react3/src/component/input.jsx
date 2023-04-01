import React, { useState } from "react";

function Input(){
    const [text, setText] = useState('');

    const onChange = (e)=>{ // e : 이벤트 발생(연속적인 이벤트 발생시 사용 -> 자료입력을 계속 할 때 등의 input 태그에 주로 사용)
        setText(e.target.value);
    }

    const reset = ()=>{
        setText('');
    }

    return(
        <>
            <input onChange={onChange} value={text}/>
            <button onClick={reset}>지우기</button>
            <div>
                <b>값 : {text}</b>
            </div>
        </>
    );
}

export default Input;