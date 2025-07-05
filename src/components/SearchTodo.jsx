import React, { StrictMode } from 'react';
import styled from 'styled-components';

const InputArea = styled.div`
    background-color: #FFFFCC;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    border-radius: 8px;
`;

export const SearchTodo = (props) => {
    const { searchText, onChange, onClick, onReset } = props;
    return (
        <InputArea>
            <input placeholder="Todoを検索" value={searchText} onChange={onChange} />
            <button onClick={onClick}>検索</button>
            <button onClick={onReset}>解除</button>
        </InputArea>
    )
}