import React, { StrictMode } from 'react';
export const SearchTodo = (props) => {
    const { searchText, onChange, onClick, onReset } = props;
    return (
        <div className="input-area">
            <input placeholder="Todoを検索" value={searchText} onChange={onChange} />
            <button onClick={onClick}>検索</button>
            <button onClick={onReset}>解除</button>
        </div>
    )
}