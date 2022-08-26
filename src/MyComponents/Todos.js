import React from 'react'
import "./Todos.css"
import TodoItem from "./TodoItem"
import BackgroundImage from "./BackgroundImage.jpg"


export default function Todos({todoList,onDelete}) {
 
  let myStyle={
    minHeight:"70vh",
  }
  return (
    <>
      <div className="container my-3" style={myStyle}>
      <h3 className='todolist my-3' >Todos List</h3>

      {todoList.length===0?<p className="fst-italic">No Todos to display</p>:todoList.map(function(todo){
        return(<TodoItem todo={todo} key={todo.sno} func={()=>{onDelete(todo)}}/>)
      })
      }


{/* {props.searchBar?<form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form> :" "} */}


    
    </div>
    <div className="overlay" style={{background: `url(${BackgroundImage})`}} />
    </>
  )
}
