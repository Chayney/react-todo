import React, { StrictMode } from 'react';
import styled from 'styled-components';

const InputArea = styled.div`
    background-color: #c6e5d9;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    border-radius: 8px;
`;

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled } = props;
    return (
        <InputArea>
            <input disabled={disabled} placeholder="Todoを入力" value={todoText} onChange={onChange} />
            <button disabled={disabled} onClick={onClick}>追加</button>
        </InputArea>
    )
}