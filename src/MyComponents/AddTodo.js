import React from 'react'
import "./AddTodo.css"
import { useState } from 'react'
export function AddTodo({addTodo}) {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) =>{
        //page doesnt get reloaded.
        //e.preventDefault();
        e.preventDefault();
        if(!title || !desc)
            alert("Title or Description cannot be EMPTY");
        else
        {
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
<div className="container">
    <h3 className="addtodo">Add a Todo</h3>
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="title form-label">Title of your Todo</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" placeholder="Title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="desc form-label">Description</label>
            <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" placeholder="Description"/>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-sm btn-success mb-3">Add Todo</button>
        </div>
    </form>
</div> 
  )
}
