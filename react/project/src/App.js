import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import MainPage from './component/mainPage';

// 서브 콤포넌트
import Membership from './component/membership';
import Product from './component/product';
import Market from './component/market';
import Brand from './component/brand';
import Plan from './component/plan';
import Event from './component/event';
import Delivery from './component/delivery';

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
              {/* 
                다른 주소로 이동시키기
                <Link to="주소">문자</Link>              
              */}
              <div className='logo'><Link to={"/component/mainPage"}>LOGO</Link></div>
              <ul className='nav'>
                <li><Link to={"/component/membership"}>프리미엄멤버쉽</Link></li>
                <li><Link to={"/component/product"}>냉장제품</Link></li>
                <li><Link to={"/component/market"}>시크릿마켓</Link></li>
                <li><Link to={"/component/brand"}>브랜드관</Link></li>
                <li><Link to={"/component/plan"}>기획전</Link></li>
                <li><Link to={"/component/event"}>이벤트</Link></li>
                <li><Link to={"/component/delivery"}>가정배달</Link></li>
              </ul>
          </div>
      </div>
      {/* 
        라우터 객체로 바뀔 영역
        특정 주소에 컴포넌트를 연결하는 방법
        <Route path="주소" component={보여줄 컴포넌트}</Route>
      */}
      <>
        <Route path="/" exact={true} component={MainPage}></Route>
        <Route path="/component/membership" component={Membership}></Route>
        <Route path="/component/product" component={Product}></Route>
        <Route path="/component/market" component={Market}></Route>
        <Route path="/component/brand" component={Brand}></Route>
        <Route path="/component/plan" component={Plan}></Route>
        <Route path="/component/event" component={Event}></Route>
        <Route path="/component/delivery" component={Delivery}></Route>
      </>
      <div className='footer'>footer</div>
    </>
  );
}

export default App;
