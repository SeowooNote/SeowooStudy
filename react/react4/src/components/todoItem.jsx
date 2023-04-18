import React from "react";
import styled, {css} from "styled-components";
import {MdDone, MdDelete} from 'react-icons/md';

/*
    react 아이콘 속성
    yarn add react-icons
    적용할때 react 아이콘에서 지정하는 방식으로 추가(함수로 사용)
    스타일을 수정할때 감싸는 태그나 내부 컴포넌트로 지정하고 스타일은 텍스트 스타일로 설정
    react 아이콘 사이트
        http://react-icons.github.io/react-icons
*/

const CheckCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #BFBFBF;
    transition: all 0.5s;

    // props의 속성을 활용해서 스타일을 적용 import styled, {css} from 'styled-components';
    ${props => props.done && css`
        border: 1px solid #BFBFBF;
    `}

    // 자신의 &의 가상선택자에 의해서 스타일 선언하기
    &:hover{
        border: 1px solid #BFBFBF;
    }
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #262626;
    ${props => props.done && css`
        color: #404040;
    `}
`

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #262626;
    font-size: 24px;
    cursor: pointer;
    display: none;
`

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
        ${Remove}{
            display: block;
        }
    }
`

function TodoItem({text, done}){
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>
                {done && <MdDone/>}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove><MdDelete/></Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;