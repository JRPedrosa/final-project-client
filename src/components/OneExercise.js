import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

let rand1;
let rand2;
let randInterval;
let counter = 0;
let correct = 0;
let percent;

let piano = [
  "../2489__jobro__piano-ff/39172__jobro__piano-ff-025.wav",
  "../2489__jobro__piano-ff/39173__jobro__piano-ff-026.wav",
  "../2489__jobro__piano-ff/39174__jobro__piano-ff-027.wav",
  "../2489__jobro__piano-ff/39175__jobro__piano-ff-028.wav",
  "../2489__jobro__piano-ff/39176__jobro__piano-ff-029.wav",
  "../2489__jobro__piano-ff/39177__jobro__piano-ff-030.wav",
  "../2489__jobro__piano-ff/39178__jobro__piano-ff-031.wav",
  "../2489__jobro__piano-ff/39179__jobro__piano-ff-032.wav",
  "../2489__jobro__piano-ff/39180__jobro__piano-ff-033.wav",
  "../2489__jobro__piano-ff/39181__jobro__piano-ff-034.wav",
  "../2489__jobro__piano-ff/39182__jobro__piano-ff-035.wav",
  "../2489__jobro__piano-ff/39183__jobro__piano-ff-036.wav",
  "../2489__jobro__piano-ff/39184__jobro__piano-ff-037.wav",
  "../2489__jobro__piano-ff/39185__jobro__piano-ff-038.wav",
  "../2489__jobro__piano-ff/39186__jobro__piano-ff-039.wav",
  "../2489__jobro__piano-ff/39187__jobro__piano-ff-040.wav",
  "../2489__jobro__piano-ff/39188__jobro__piano-ff-041.wav",
  "../2489__jobro__piano-ff/39189__jobro__piano-ff-042.wav",
  "../2489__jobro__piano-ff/39190__jobro__piano-ff-043.wav",
  "../2489__jobro__piano-ff/39191__jobro__piano-ff-044.wav",
  "../2489__jobro__piano-ff/39193__jobro__piano-ff-045.wav",
  "../2489__jobro__piano-ff/39194__jobro__piano-ff-046.wav",
  "../2489__jobro__piano-ff/39195__jobro__piano-ff-047.wav",
  "../2489__jobro__piano-ff/39196__jobro__piano-ff-048.wav",
  "../2489__jobro__piano-ff/39197__jobro__piano-ff-049.wav",
  "../2489__jobro__piano-ff/39198__jobro__piano-ff-050.wav",
  "../2489__jobro__piano-ff/39199__jobro__piano-ff-051.wav",
  "../2489__jobro__piano-ff/39200__jobro__piano-ff-052.wav",
  "../2489__jobro__piano-ff/39201__jobro__piano-ff-053.wav",
  "../2489__jobro__piano-ff/39202__jobro__piano-ff-054.wav",
  "../2489__jobro__piano-ff/39203__jobro__piano-ff-055.wav",
  "../2489__jobro__piano-ff/39204__jobro__piano-ff-056.wav",
  "../2489__jobro__piano-ff/39205__jobro__piano-ff-057.wav",
  "../2489__jobro__piano-ff/39206__jobro__piano-ff-058.wav",
  "../2489__jobro__piano-ff/39207__jobro__piano-ff-059.wav",
  "../2489__jobro__piano-ff/39208__jobro__piano-ff-060.wav",
  "../2489__jobro__piano-ff/39209__jobro__piano-ff-061.wav",
];



function OneExercise(props) {

   

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
           const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/exercises/${props.match.params.id}`, { withCredentials: true});
          
           setIntervals(response.data.possibleIntervals);
           setExerciseName(response.data.name)
           setDirection(response.data.direction)
        //    for (let i = 0; i < intervals.length; i++) {
        //        possibleIntervals.push(intervals[i]);
        //    }
           
        }
        getOneExercise();

        console.log(intervals)
        
    }, [])

  function randomize() {
    // possibleIntervals = intervals
    //     console.log(intervals, possibleIntervals)
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
      play();
  }



  function play() {

    let note3 = new Audio(piano[rand1])
    let note4 = new Audio(piano[rand2])

    note3.play()
    setTimeout(function(){
      note3.pause();
      note4.play(); 
     }, 1000);
    

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
      // if (correct > 0) {
      //   correct--;
      // }
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

          <button onClick={() => randomize()}>Play New Interval</button>
          <button onClick={() => play()}>Repeat</button>

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