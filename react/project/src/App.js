import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';

// react-router-dom : 라우터 관련 함수를 내장
// 설치 : yarn add react-router-dom@5
// 패키지 연결
// 특정 주소에 컴포넌트 연결하는 방법
// <Route path="주소" component={보여줄 컴포넌트}</Route>
// Index.js 파일에서
/* 
  <BrowseRouter>
    <App />
  </BrowseRouter>
*/
// yarn build : 배포용 파일 생성

function App() {
  return (
    <>
      <div className='header'>
          <div className='headerIn'>
            
          </div>
      </div>
    </>
  );
}

export default App;
