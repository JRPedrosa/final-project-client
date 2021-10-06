import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

let rand1;
let rand2;
let randInterval;
let possibleIntervals = [];

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
    if (num === randInterval) {
      console.log("SUCCESSS BIATCH")
      setMessage("Correct")
      randomize();
    } else {
      console.log("you dumb cunt")
      setMessage("Wrong!")
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

          <br></br><br></br>

          <h2>{message}</h2>

          <br></br><br></br>

              <div className="exButtons">

                  {intervals.includes(0) && 
                  <button onClick={() => check(0)} value="0">Unisson</button>
                  }
                  
                  {intervals.includes(1) && 
                  <button onClick={() => check(1)}  value="1">Minor Second</button>
                  }
                  {intervals.includes(2) && 
                  <button onClick={() => check(2)}  value="2">Major Second</button>
                  }
                  {intervals.includes(3) && 
                  <button onClick={() => check(3)}  value="3">Minor Third</button>
                  }
                  {intervals.includes(4) && 
                  <button onClick={() => check(4)}  value="4">Major Third</button>
                  }
                  {intervals.includes(5) && 
                  <button onClick={() => check(5)}  value="5">Perfect Fourth</button>
                  }
                  {intervals.includes(6) && 
                  <button onClick={() => check(6)}  value="6">Tritone</button>
                  }
                  {intervals.includes(7) && 
                  <button onClick={() => check(7)}  value="7">Perfect Fifth</button>
                  }
                  {intervals.includes(8) && 
                  <button onClick={() => check(8)}  value="8">Minor Sixth</button>
                  }
                  {intervals.includes(9) && 
                  <button onClick={() => check(9)}  value="9">Major Sixth</button>
                  }
                  {intervals.includes(10) && 
                  <button onClick={() => check(10)}  value="10">Minor Seventh</button>
                  }
                  {intervals.includes(11) && 
                  <button onClick={() => check(11)}  value="11">Major Seventh</button>
                  }
                  {intervals.includes(12) && 
                  <button onClick={() => check(12)}  value="12">Octave</button>
                  }

              </div>

          
        </div>

        <div></div>
        <div></div>

     </div>
  )
}

export default OneExercise;