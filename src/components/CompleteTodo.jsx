import React, { StrictMode } from 'react';
import styled from 'styled-components';

const CompleteArea = styled.div`
    border: 2px solid #aacfd0;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    background-color: #c9dede;
    border-radius: 8px;
`;

export const CompleteTodo = (props) => {
    const { todos, onClickBack } = props;
    return (
        <CompleteArea>
            <p className="title">完了</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                        <div className="list-row">
                            <p className="todo-item">{todo}</p>
                            <button onClick={() => onClickBack(index)}>戻す</button>
                        </div>
                    </li>
                ))}
            </ul>
        </CompleteArea>
    )
}