
import './App.css';
import Header from "./MyComponents/Header"
import Homepage from "./MyComponents/Homepage/Homepage"

import Footer from "./MyComponents/Footer"
import {AddTodo} from "./MyComponents/AddTodo"
import Todos from "./MyComponents/Todos"
import {useState, useEffect} from 'react'
import Stopwatch from "./MyComponents/stopwatch/Stopwatch"
import About from "./MyComponents/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null)
  {
     initTodo=[]
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem('todos'));
  }
  
  const onDelete = (todo) =>
  {
    let b = todos.filter((e)=>{
      return e!==todo;
    })
    setTodos(b);
    localStorage.setItem('todos',JSON.stringify(todos));
  }
 
 
 
  const addTodo = (title,desc)=>  
  {
      let sno
      if(todos.length===0)
        sno=0;
      else
        sno = (todos[todos.length-1].sno)+1;
      const myTodo ={
        sno: sno,
        title:title,
        desc:desc,
      }
      setTodos(previousState =>{
        return [...previousState,myTodo]
      });
      localStorage.setItem('todos',JSON.stringify(todos));
  }

  const [todos,setTodos] = useState(initTodo);

  useEffect( ()=> {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  return (
    <>
    
    <Router>
      <Header title="Study with Me" searchBar={false}/>  
      
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="timeyourself/*" element={<Stopwatch/>} />
        <Route path="mylist/*" element={
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todoList={todos} onDelete={onDelete}/>
                <Footer/>
              </>} />
        <Route path="about/*" element={<><About /> <Footer/></>} />
 
      </Routes>

      
      
    </Router>
    </>
  );
}

export default App;
