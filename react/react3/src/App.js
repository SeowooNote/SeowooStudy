import React, { useMemo, useRef, useState } from 'react';
import './App.css';

import Counter from './component/counter';
import Input from './component/input';
import MultiInput from './component/multiinput'
import UserList1 from './component/userlist1';
import CreateUser from './component/createuser';
import UserList2 from './component/userlist2';

function countActiveUser(users){
  console.log('선택된 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [input, setInput] = useState({
    username: '',
    email: ''
  });

  const {username, email} = input;

  const onChange = (e)=>{
    const{name, value} = e.target;
    setInput({
      ...input,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '김사과',
      email: 'apple@apple.com'
    },
    {
      id: 2,
      username: '오렌지',
      email: 'orange@orange.com'
    },
    {
      id: 3,
      username: '바나나',
      email: 'banana@banana.com'
    },
    {
      id: 4,
      username: '이메론',
      email: 'melon@melon.com'
    },
    {
      id: 5,
      username: '배애리',
      email: 'berry@berry.com'
    }
  ]);

  const nextId = useRef(6); // 새로 추가된 데이터의 배열속성에서 id값을 의미 -> id: nextId == id: 6

  // 새로운 배열요소 생성
  const onCreate = ()=>{
    const user = {
      id: nextId,
      username,
      email
    }
    // 배열에 삽입
    // setUsers([...user, user])
    setUsers(users.concat(user)); // concat : 배열 합치기

    setInput({
      username: '',
      email: ''
    });

    nextId.current += 1; // 배열요소의  id값을 다음에 입력될 요소의 id값으로 증가
  }

  const count = useMemo(()=>countActiveUser(users), [users]);

  // 리스트 선택시 변환효과를 주는 함수
  const onToggle = (id)=>{
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
  }

  // 리스트 삭제 함수
  const onRemove = (id)=>{
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      <Counter/>
      <br/><br/>
      <Input/>
      <br/><br/>
      <MultiInput/>
      <br/><br/>
      <UserList1/>
      <br/><br/>

      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <hr/>
      <UserList2 users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>선택된 사용자 수 : {count}</div>
    </>
  );
}

export default App;
