import React from 'react';
import './App.css';

import {Route, Link} from 'react-router-dom';
// yarn add react-router-dom@5
// Router 링크 -> React에서는 a태그를 특별한 경우 외에는 사용하지 않음
// 특정 주소에 컴포넌트를 연결하는 방법

// import Headers from './header';
import MainImg from './mainImg';
import Contents1 from './contents1';
import Contents2 from './contents2';
import Contents3 from './contents3';
// import Footer from './footer';


function App(){
  return(
    <>
      {/* <Headers/> */}
      <div className='header'>
        <ul>
          {/* <Link to="주소">문자</Link> */}
          <li><Link to="/">contents1</Link></li>
          <li><Link to="/contents2">contents2</Link></li>
          <li><Link to="/contents3">contents3</Link></li>
        </ul>
      </div>
      <MainImg/>
      <div>
        {/* 연결하고자 하는 컴포넌트 설정 -> <Route path="주소" component={보여줄 컴포넌트}/> */}
        <Route path="/" exact={true} component={Contents1}/>
        <Route path="/" component={Contents2}/>
        <Route path="/" component={Contents3}/>
      </div>
      {/* <Contents1/> */}
      {/* <Contents2/> */}
      {/* <Contents3/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App;
