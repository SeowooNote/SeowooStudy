import React, { useState } from "react";
// { useState } : React 패키지에서 useState라는 Hooks를 불러옴 / '동적 상태 관리'

function Counter(){
    /*
        상태값을 관리하는 형식
        상태값을 객체로 지정[저장명, 저장되는 값을 변환시키는 함수명] = useState();
        숫자형 : useState(0); / 문자열형 : useState(''); / 불리언형 : useState(false);
    */
    const [number, setNumber] = useState(0); // useState(0) -> number의 초기 상태값은 0

    const plus = ()=>{
        setNumber(number + 1);
    }

    const minus = ()=>{
        setNumber(number - 1);
    }

    return(
        <>
            <h2>{number}</h2>
            <button onClick={plus}>더하기</button>
            <button onClick={minus}>빼기</button>
            {/* onClick : 버튼을 마우스로 클릭하였을때 이벤트 */}
        </>
    );
}

export default Counter;