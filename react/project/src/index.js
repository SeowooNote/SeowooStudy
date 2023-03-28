import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals