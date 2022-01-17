import React from 'react';
import { Link } from "react-router-dom";

export default function Todos(props){
  return(
    <div className="container">
        <h3 className='text-center my-3' >ToDo list &nbsp;</h3>
        { props.todos.length === 0? <center className="my-4">No todos to display</center>: props.todos.map((todo) =>{
            return (
                    <div className="my-3 py-2 todo">
                        <h5>{todo.title}</h5>
                        <p>{todo.desc}</p>
                        <button class="btn btn-sm btn-danger" onClick={() => {props.onDelete(todo)}}>Delete</button>
                    </div>
            )})}
        <Link to='/add' ><button id="add" onClick={()=>{
            document.getElementById('add').style.transform = 'rotate(45deg)';
        }}> + </button></Link>
    </div>
  )
}