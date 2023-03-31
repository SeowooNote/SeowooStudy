import React from "react";
import MainImg from "../images/mainimg.png";

function MainPage(){
    return(
        <>
            {/*
                REACT 이미지 적용히는 방식
            */}
            {/* 1. 기존 HTML에서 쓰는 이미지를 적용하는 방식 */}
            <div className="mainImg"><img src={require('../images/mainimg.png')} width="100%" alt=""/></div>
            {/* 2. 이미지를 임포트해서 적용하는 방식 */}
            <div className="mainImg"><img src={MainImg} alt="" /></div>
            {/* 3. 최상위 폴더 public에 이미지 폴더를 추가하여 적용하는 방식(제일 많이 이용하는 방법) */}
            <div className="mainImg"><img src="/images/mainimg.png" width="100%" alt="" /></div>
            <div className="contents">contents</div>
        </>
    );
}

export default MainPage;