import React, { useRef, useState } from 'react';
import './App.css';

import Counter from './component/counter';
import Input from './component/input';
import MultiInput from './component/multiinput'
import UserList1 from './component/userlist1';
import CreateUser from './component/createuser';
import UserList2 from './component/userlist2';

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

  const nextId = useRef(6);

  const onCreate = ()=>{
    const user = {
      id: nextId,
      username,
      email
    }
    setUsers(users.concat(user));

    setInput({
      username: '',
      email: ''
    });

    nextId.current += 1;
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
      <UserList2 users={users}/>
    </>
  );
}

export default App;
