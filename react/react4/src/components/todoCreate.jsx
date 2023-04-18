import React, { useState } from "react";
import styled from "styled-components";
import {MdAdd} from "react-icons/md";

const InsertFormPositioner = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`

const InsertForm = styled.div`
    background-color: #262626;
    padding: 32px 32px 72px 32px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 1px solid #404040;
`

const Input = styled.div`
    width: 100px;
    outline: none;
    font-size: 18px;
    border: 1px solid #BFBFBF;
    padding: 12px;
    border-radius: 4px;
    box-sizing: border-box;
`

const CircleButton = styled.div`
    background-color: #BFBFBF;
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    bottom: 15px;
    padding: 20px 0px 0px 20px;
    transfrom: translate(-50%, 50%);
    border: none:
    outline: none;
    diplay: flex;
    align-items : center;
    justify-content: center;
    font-size: 60px;
    color: white;
`
seowoo-todo-portfolio
function TodoCreate(){
    const[open, setOpen] = useState(false);

    const onToggle = ()=> setOpen(!open);

    return(
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input/>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle}><MdAdd/></CircleButton>
        </>
    );
}

export default TodoCreate;