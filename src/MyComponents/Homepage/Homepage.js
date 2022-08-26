import React from 'react'
import {useState,useEffect} from 'react'
import "./Homepage.css"

function Homepage() {
  const [qoutes,setQoutes] = useState("");

  const getQoutes = ()=>{
      fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data =>setQoutes(data));
  }
  useEffect( ()=>{
    getQoutes();
  },[]);

  return (
  <div className="qoute">
    <div className="customdiv text-center">
      <div className="card-header">Qoute for You</div>
      <div className="card-body">
        <p className="card-text">{qoutes.content}</p>
        <h5 className="card-title">-{qoutes.author}</h5>
        <button className="font-italic btn btn-dark" onClick={getQoutes}>Click to get next qoute</button>
      </div>
    </div>
  </div>
  )
}

export default Homepage
