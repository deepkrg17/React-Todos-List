import './App.css';
import React, { useState, useEffect } from 'react';
import Basic from './components/header.js';
import Add from './components/Addtodo.js';
import Todos from './components/Todos.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    var initTodo;
    if(localStorage.getItem('todos')==null){
        initTodo = [];
    }else{
        initTodo = JSON.parse(localStorage.getItem('todos'));
    }
    const [todos, setTodos] = useState(initTodo);
    const onDelete = (todo) => {
        setTodos(todos.filter((e) => {
            return e!==todo;
        }))};
    const AddToDo = (a, b) => {
        let sno;
        if(todos.length === 0){
            sno = 1;
        } else{
            sno = todos[todos.length - 1].sNo + 1;
        }
        let newtodo = {
            sNo: sno,
            title: a,
            desc: b
        };
        setTodos([...todos, newtodo]);
        console.log(newtodo);
    };
    useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos]);
    
    return (
    <Router>
        <Basic/>
        <Switch>
            <Route exact path="/">
                <Todos todos={todos} onDelete={onDelete}/>
            </Route>
            <Route exact path="/add">
                <Add AddToDo={AddToDo}/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
        </Switch>
    </Router>
    );
}

export default App;