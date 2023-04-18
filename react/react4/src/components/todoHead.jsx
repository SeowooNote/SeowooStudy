import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #BFBFBF;

    h1{
        margin: 0;
        font-size: 36px;
        color: #0D0D0D;
    }

    .day{
        margin-top: 4px;
        font-size: 21px;
        color: #262626;
    }

    .tasks-left{
        margin-top: 40px;
        font-size: 18px;
        font-weight: bold;
        color: #404040;
    }
`

function TodoHead(){
    const today = new Date();

    const dateString = today.toLocaleDateString('ko-KR',{
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: "long"
    })

    return(
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;