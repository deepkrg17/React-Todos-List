import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Add({AddToDo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description can't be empty.");
        }else{
            AddToDo(title, desc);
            setTitle("");
            setDesc("");
        }
    };
    return(
        <div className="container ">
            <h3 className='text-center my-3' >Add a ToDo&nbsp;</h3>
        <form onSubmit={submit}>
            <div className="m-1">
                <label className="form-label">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"/>
            </div>
            <div className="m-1">
                <label className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control"/>
            </div>
            <center><button type="submit" className="btn btn-sm btn-success my-3">Submit</button></center>
            <Link to='/' ><button id="cross" onClick={()=>{
                document.getElementById('cross').style.transform = 'rotate(-45deg)';
            }}> + </button></Link>
        </form>
        </div>
    )
}