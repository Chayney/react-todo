import React, { StrictMode } from 'react';
import './styles.css';
import { useState } from 'react';
import { InputTodo } from './components/InputTodo.jsx';
import { IncompleteTodo } from './components/IncompleteTodo.jsx';
import { CompleteTodo } from './components/CompleteTodo.jsx';

export const Todo = () => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState(['勉強', '夕食']);
    const [completeTodos, setCompleteTodos] = useState(['朝食', '運動']);

    const onChangeTodoText = (event) => setTodoText(event.target.value);
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
    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
            <IncompleteTodo todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
        </>
    )
}