import React from "react";

// function Hello({color, fontSize, name, isSpecial}){
//     return(
//         <>
//             <div style={{color}}>{isSpecial ? <b>★★★★★</b> : null}안녕하세요...Hello</div>
//             <div style={{fontSize}}>안녕하세요, {name}</div>
//         </>
//     )
// }

function Hello(props){
    return(
        <>
            <div style={{color: props.color}}>{props.isSpecial ? <b>★★★★★</b> : null}안녕하세요...Hello</div>
            <div style={{fontSize: props.fontSize}}>안녕하세요, {props.name}</div>
            {/* color: props.color -> 스타일에 관련된 속성 / props.isSpecial -> 데이터값을 전달(일반적인 값) */}
        </>
    );
}

export default Hello;