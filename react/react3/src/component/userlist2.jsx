import React from "react";

function User({user, onRemove, onToggle}){
    return(
        <>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'aqua' : 'black'
                }}
                onClick={()=>onToggle(user.id)}
                >{user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제하기</button>
        </>
    );
}

function UserList2({users, onRemove, onToggle}){
    return(
        <>
            {users.map((user)=>(
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </>
    );
}

export default UserList2;