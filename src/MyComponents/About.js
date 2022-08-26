import React from 'react'
const studyTable = new URL("./StudyTable.jpg",import.meta.url)

function About() {
  let myStyle ={
    width: "200px"
  }
  
  return (
    <div className=" para container fs-3 text-bg-light p-3" >
      <div className="myImage text-center">
        <img src={studyTable} className="rounded" alt="" style={myStyle}/>
      </div>
      <div className="font-italic description">
        <p className="text-center">Study helper is a web-based tool which can help students in different routines of their curriculam.It is a desktop application that helps then in doing several tasks such as- </p>
        <p className="text-center">Maitaining order of the day by making a ToDo list.<br/></p>
        <p className="text-center">They can also time themselves to check the time they have efficienty studied.<br/></p>
        <p className="text-center">This app also facilitates a page dedicated to random facts that can keep childrens' interest up.</p>
      </div>
    </div>
  )
}

export default About
