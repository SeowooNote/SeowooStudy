import React from "react";

function User({user}){
    return(
        <>
            <b>{user.username}</b> <span>({user.email})</span><br />
        </>
    );
}

function UserList1(){
    const users = [
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
    ]
    return(
        <>
            <p><User user = {users[0]}></User></p>
            <p><User user = {users[1]}></User></p>
            <p><User user = {users[2]}></User></p>
            <p><User user = {users[3]}></User></p>
            <p><User user = {users[4]}></User></p>

            <br/><br/>

            {/* {배열명.map((배열요소명)=>(<컴포넌트명 user={배열요소} key={배열요소.id}/>))} */}
            {/* {배열명.map((user, index)=>(<컴포넌트명 user={배열요소}/>))} : index는 배열요소의 속성 중 id값이 없을 경우 사용 */}
            {users.map((user)=>(
                <User user={user} key={user.id}/>
            ))}
        </>
    );
}

export default UserList1;