import React, { StrictMode } from 'react';
import styled from 'styled-components';

const IncompleteArea = styled.div`
    border: 2px solid #aacfd0;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    border-radius: 8px;
`;

export const IncompleteTodo = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
        <IncompleteArea>
            <p className="title">未完了</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                        <div className="list-row">
                            <p className="todo-item">{todo}</p>
                            <button onClick={() => onClickComplete(index)}>完了</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </div>
                    </li>
                ))}
            </ul>
        </IncompleteArea>
    )
}