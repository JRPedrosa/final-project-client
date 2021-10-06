import React, { useState, useEffect } from "react";

let rand1;
let rand2;
let randInterval

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



function Interval() {

  const [message, setMessage] = useState("");

  function randomize() {

      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

      let possibleIntervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      randInterval = possibleIntervals[Math.floor(Math.random() * possibleIntervals.length)]
      rand1 = Math.floor(Math.random() * 24)
      rand2 = rand1 + randInterval

      play();
  }



  function play() {

    let note1 = new Audio(piano[rand1])
    let note2 = new Audio(piano[rand2])

    note1.play()
    setTimeout(function(){
      note1.pause();
      note2.play(); 
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

            <h1>Interval Identification</h1>

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

            <h2>{message} <span></span></h2>

            <br></br><br></br>

            <div className="exButtons">

              <button onClick={() => check(0)} value="0">Unisson</button>
              <button onClick={() => check(1)}  value="1">Minor Second</button>
              <button onClick={() => check(2)}  value="2">Major Second</button>
              <button onClick={() => check(3)}  value="3">Minor Third</button>
              <button onClick={() => check(4)}  value="4">Major Third</button>
              <button onClick={() => check(5)}  value="5">Perfect Fourth</button>
              <button onClick={() => check(6)}  value="6">Tritone</button>
              <button onClick={() => check(7)}  value="7">Perfect Fifth</button>
              <button onClick={() => check(8)}  value="8">Minor Sixth</button>
              <button onClick={() => check(9)}  value="9">Major Sixth</button>
              <button onClick={() => check(10)}  value="10">Minor Seventh</button>
              <button onClick={() => check(11)}  value="11">Major Seventh</button>
              <button id="lastButton" onClick={() => check(12)}  value="12">Octave</button>

            </div>
            


        </div>

        <div></div>
        <div></div>
       

     </div>
  )
}

export default Interval;