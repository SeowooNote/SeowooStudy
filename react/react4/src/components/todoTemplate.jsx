import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    margin: 96px auto 32px auto;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 512px;
    height: 768px;
    background-color: #D9D9D9;
    box-shadow: 0 0 8px 0 #BFBFBF;
    border-radius: 5px;
`



function TodoTemplate({children}){
    return(
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );   
}

export default TodoTemplate;