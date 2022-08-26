//  import React from 'react'
//  import "./stopwatch.css"
//  import {useState} from 'react'


//  function Stopwatch() {
   
//   const [displaytime,setDisplaytime] = useState(25*60);
//   const [timerOn,setTimeron] = useState(false);
//   const [onBreak,setOnbreak] = useState(false);
//   const formatTime = (time) =>{
//       let minutes = Math.floor(time/60);
//       let seconds = time%60;
//       return ((minutes<10 ? "0" + minutes : minutes) + ":" + (seconds<10 ? "0"+seconds : seconds));
//   }
//   const changeTime = ()=>{
//         let second = 1000;
//         let date = new Date().getTime() + second;
//         let nextDate = new Date().getTime() + second;
//         let onBreakVariable = onBreak;

//         if(!timerOn){
//           let interval = setInterval( ()=>{
//           date = new Date().getTime();
//           if(date > nextDate){
//             setDisplaytime((prev)=> {
//               return prev-1;
//             });
//             nextDate += second;
//           }
//           },1000);
//           localStorage.clear();
//           localStorage.setItem('interval-id',interval);
//         }
//         if(!timerOn){
//             clearInterval(localStorage.getItem("interval-id"));
//         }
//         setTimeron(!timerOn);
//    };
  
//   const reset = ()=>{
//         setDisplaytime(25*60);
//   }
//    return (
//      <div className="pomodoro">
//           <div className="text-center font-italic">POMODORO CLOCK</div>
//           <hr/>
//           <div className="timer">
//             <div>{formatTime(displaytime)}</div>
//             <div className="buttons">
//                 <button className="styling btn btn-dark" onClick={changeTime}>
//                   {timerOn?<h2>Stop</h2>: <h2>Start</h2>}
//                 </button>
//                 <button type="button" className="styling btn btn-dark" onCLick={reset}><h2>Reset</h2></button>
//             </div>
//           </div>
//      </div>
    

//    )
//  }
 
//  export default Stopwatch

import React, { useEffect, useState } from 'react'
import "./stopwatch.css"
function Stopwatch() {
  const [minutes,setMinutes] = useState(25);
  const [seconds,setSeconds] = useState(0);
  const[displayMessg,setDisplaymessg] = useState(false);

  useEffect( ()=>{
      let interval = setInterval(()=>{
          clearInterval(interval);

          if(seconds ===0){
              if(minutes!==0)
              {
                setSeconds(59);
                setMinutes(minutes-1);
              }
              else{
                  let minutes = displayMessg ? 24 : 4;
                  let seconds = 59;
                  setSeconds(seconds);
                  setMinutes(minutes);
                  setDisplaymessg(!displayMessg);
              }
          }
          else{
            setSeconds(seconds-1);
          }
      },1000)
  },[seconds]);

  const timerMinutes = minutes<10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds<10 ? `0${seconds}` : seconds;
  return (
    <div className="pomodoro">
    <div className="message">
      <div className="">{displayMessg?<p>Break Time: </p> : <p>BreakTime starts in :</p>}</div>
    </div>
    <div className="timer">{timerMinutes}:{timerSeconds}</div>
    </div>
  )
}

export default Stopwatch




