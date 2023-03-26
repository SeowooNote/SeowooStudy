import React from 'react';
import './App.css';
import Hello from './component/hello';
import Wrapper from './component/wrapper';
import Header from './component/header';
import HeaderIn from './component/headerIn';

function App() {
  // 내부 스타일시트로 객체형 데이터 선언
  const style ={
    backgroundColor : 'gray',
    color: 'white',
    fontSize: 40,
    padding: '10px'
  }
  // JavaScript 변수 및 상수 값을 설정했을때 전달
  const name = 'apple';

  return (
    <Wrapper>
      <div style={style}>Hello</div>
      <div className='box'>{name}</div>

      {/* props -> 컴포넌트의 속성을 지정 */}
      <Hello color='red' fontSize='30px' name='apple'/>
      <Hello color='green' fontSize='50px' name='banana'/>
      <Hello color='blue' fontSize='70px' isSpecial={true}/>
      <Hello color='blue' fontSize='70px' isSpecial={false}/>

      {/* 상단 */}
      <Header>
        <HeaderIn/>
      </Header>
    </Wrapper>
  );
}

export default App;
