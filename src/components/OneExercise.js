import React, { useState, useEffect } from "react";
import axios from "axios";

let rand1;
let rand2;
let randInterval;
let counter = 0;
let correct = 0;
let percent;


function OneExercise({piano, match}) {

   

  const [message, setMessage] = useState("");
  const [intervals, setIntervals] = useState([]);
  const [exerciseName, setExerciseName] = useState("")
  const [direction, setDirection] = useState("")

  const [animate, setAnimate] = useState(false);

  const [color, setColor] = useState(false);

  const [flash, setFlash] = useState(null)

  const [checkNum, setCheckNum] = useState(null);



    useEffect(() => {
        async function getOneExercise() {
           const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/exercises/${match.params.id}`, { withCredentials: true});
          
           setIntervals(response.data.possibleIntervals);
           setExerciseName(response.data.name)
           setDirection(response.data.direction)
           
        }
        getOneExercise();

        counter = 0;
        correct = 0;
        percent = null;

        console.log(intervals)
        
    }, [])

 

  function randomize() {
      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      randInterval = intervals[Math.floor(Math.random() * intervals.length)]
      if (direction === "Descending") {
        rand1 = Math.floor(Math.random() * 24) + 11
        rand2 = rand1 - randInterval
      } else {
        rand1 = Math.floor(Math.random() * 24)
        rand2 = rand1 + randInterval
      }
      
      console.log(intervals, direction, randInterval)
      play(false);
  }



  function play(repeat) {

    if (repeat) {
      let note3 = new Audio(piano[rand1])
      let note4 = new Audio(piano[rand2])
  
      note3.load()
      note4.load()
  
      note3.play()
      setTimeout(function(){
        note3.pause();
        note4.play(); 
       }, 1000);

    } else {
      let note3 = new Audio(piano[rand1])
      let note4 = new Audio(piano[rand2])
  
      note3.load()
      note4.load()
  
      setTimeout(function(){
        
        note3.play()
        setTimeout(function(){
          note3.pause();
          note4.play(); 
         }, 800);
       }, 1000);


    }

    

    console.log(`Interval: ${randInterval} - Rand1: ${rand1} - rand2: ${rand2} `)
  }



  function check(num) {

    setFlash(randInterval);
    setCheckNum(num);

    if (num === randInterval) {

      counter++;
      correct++;
      percent = Math.floor((correct / counter) * 100);

      setAnimate(!animate);
      setColor(true);
      setMessage("Correct")
      randomize();
    } else {

      counter++;

      percent = Math.floor((correct / counter) * 100);

      setAnimate(!animate);
      setColor(false);
      setMessage("Wrong!")
      randomize();
    }
  }


  return (
     <div className="homeNot">

        <div className="intervalScale">

        <h1>{exerciseName}</h1>

        <div className="playButton">
            
            <div></div>
            <div></div>
            <div></div>

          <button onClick={() => randomize()}>Play New</button>
          <button onClick={() => play(true)}>Repeat</button>

          <div></div>
            <div></div>
            <div></div>

          </div>

          <br></br>

          {percent ? <p className="percent" >{percent}%</p> : <p className="percent" >{correct}</p> }

          <h2 key={animate} className={"animate__animated animate__bounceIn" + (color ? " green" : " red")} >{message}</h2>

          <br></br><br></br>

              <div className="exButtons">

                  {intervals.includes(0) && 
                  <button key={Math.random()}  onClick={() => check(0)} className={(flash === 0 ? "right" : undefined) || (flash !== 0 && checkNum === 0 ? " wrong" : undefined)} value="0">Unisson</button>
                  }
                  
                  {intervals.includes(1) && 
                  <button key={Math.random()}  onClick={() => check(1)} className={(flash === 1 ? "right" : undefined) || (flash !== 1 && checkNum === 1 ? " wrong" : undefined)}  value="1">Minor Second</button>
                  }
                  {intervals.includes(2) && 
                  <button key={Math.random()}  onClick={() => check(2)} className={(flash === 2 ? "right" : undefined) || (flash !== 2 && checkNum === 2 ? " wrong" : undefined)}  value="2">Major Second</button>
                  }
                  {intervals.includes(3) && 
                  <button key={Math.random()}  onClick={() => check(3)} className={(flash === 3 ? "right" : undefined) || (flash !== 3 && checkNum === 3 ? " wrong" : undefined)}  value="3">Minor Third</button>
                  }
                  {intervals.includes(4) && 
                  <button key={Math.random()}  onClick={() => check(4)} className={(flash === 4 ? "right" : undefined) || (flash !== 4 && checkNum === 4 ? " wrong" : undefined)}  value="4">Major Third</button>
                  }
                  {intervals.includes(5) && 
                  <button key={Math.random()}  onClick={() => check(5)} className={(flash === 5 ? "right" : undefined) || (flash !== 5 && checkNum === 5 ? " wrong" : undefined)}  value="5">Perfect Fourth</button>
                  }
                  {intervals.includes(6) && 
                  <button key={Math.random()}  onClick={() => check(6)} className={(flash === 6 ? "right" : undefined) || (flash !== 6 && checkNum === 6 ? " wrong" : undefined)}  value="6">Tritone</button>
                  }
                  {intervals.includes(7) && 
                  <button key={Math.random()}  onClick={() => check(7)} className={(flash === 7 ? "right" : undefined) || (flash !== 7 && checkNum === 7 ? " wrong" : undefined)}  value="7">Perfect Fifth</button>
                  }
                  {intervals.includes(8) && 
                  <button key={Math.random()}  onClick={() => check(8)} className={(flash === 8 ? "right" : undefined) || (flash !== 8 && checkNum === 8 ? " wrong" : undefined)}  value="8">Minor Sixth</button>
                  }
                  {intervals.includes(9) && 
                  <button key={Math.random()}  onClick={() => check(9)} className={(flash === 9 ? "right" : undefined) || (flash !== 9 && checkNum === 9 ? " wrong" : undefined)}  value="9">Major Sixth</button>
                  }
                  {intervals.includes(10) && 
                  <button key={Math.random()} onClick={() => check(10)} className={(flash === 10 ? "right" : undefined) || (flash !== 10 && checkNum === 10 ? " wrong" : undefined)}  value="10">Minor Seventh</button>
                  }
                  {intervals.includes(11) && 
                  <button key={Math.random()} onClick={() => check(11)} className={(flash === 11 ? "right" : undefined) || (flash !== 11 && checkNum === 11 ? " wrong" : undefined)}  value="11">Major Seventh</button>
                  }
                  {intervals.includes(12) && 
                  <button key={Math.random()} onClick={() => check(12)} className={(flash === 12 ? "right" : undefined) || (flash !== 12 && checkNum === 12 ? " wrong" : undefined)}  value="12">Octave</button>
                  }

              </div>

          
        </div>

        <div></div>
        <div></div>

     </div>
  )
}

export default OneExercise;