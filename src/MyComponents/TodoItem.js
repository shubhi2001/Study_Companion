import React from 'react'
import "./TodoItem.css"

export default function TodoItem({todo,func}) {
 
  return (
    <>
    <div className="todoitem" >
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=> {func(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}
