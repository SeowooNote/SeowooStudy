import React from "react";

function User({user}){
    return(
        <>
            <b>{user.username}</b> <span>({user.email})</span><br />
        </>
    );
}

function UserList2({users}){
    return(
        <>
            {users.map((user)=>(
                <User user={user} key={user.id}/>
            ))}
        </>
    );
}

export default UserList2;