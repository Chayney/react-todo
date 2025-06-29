import React, { StrictMode } from 'react';
import './styles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputTodo } from './components/InputTodo.jsx';
import { IncompleteTodo } from './components/IncompleteTodo.jsx';
import { CompleteTodo } from './components/CompleteTodo.jsx';
import { SearchTodo } from './components/SearchTodo.jsx';

export const Todo = () => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState(['勉強', '夕食']);
    const [completeTodos, setCompleteTodos] = useState(['朝食', '運動']);
    const [searchText, setSearchText] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isReset, setIsReset] = useState(false);


    const onChangeTodoText = (event) => setTodoText(event.target.value);
    const onChangeSearchText = (event) => setSearchText(event.target.value);
    const onClickAdd = () => {
        if (todoText === '') return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText('');
    };
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }
    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }
    const onClickSearch = () => {
        if (searchText === '') return;
        setSearchKeyword(searchText);
    }
    const onClickReset = () => {
        setSearchText('');
        setSearchKeyword('');
        setIsReset(true);
    };
    useEffect(() => {
        if (isReset) {
            console.log("リセット処理が実行されました");
            setIsReset(false);
        }
    }, [isReset]);
    const filteredIncompleteTodos = incompleteTodos.filter((todo) =>
        todo.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const filteredCompleteTodos = completeTodos.filter((todo) =>
        todo.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const limitTotalTodos = incompleteTodos.length + completeTodos.length >= 50;
    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={limitTotalTodos} />
            {limitTotalTodos && (
                <p className="error">
                    登録出来るTodoは50個までです。
                </p >
            )}
            <SearchTodo searchText={searchText} onChange={onChangeSearchText} onClick={onClickSearch} onReset={onClickReset} />
            <IncompleteTodo todos={filteredIncompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteTodo todos={filteredCompleteTodos} onClickBack={onClickBack} />
        </>
    )
}