import React, { useState, useEffect } from "react";

let rand1;
let randScale;
let scaleName = "";
// let rand2;
// let randInterval

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



function Scale() {

  const [message, setMessage] = useState("");

  function randomize() {

      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


      let possibleScales = [
        [2, 4, 5, 7, 9, 11, 12], 
        [2, 3, 5, 7, 8, 10, 12],
        [2, 3, 5, 7, 8, 11, 12],
        [2, 3, 5, 7, 9, 11, 12],
        [2, 3, 5, 7, 9, 10, 12], 
        [1, 3, 5, 7, 8, 10, 12],
        [2, 4, 6, 7, 9, 11, 12],
        [2, 4, 5, 7, 9, 10, 12],
        [1, 3, 5, 6, 8, 10, 12],
      ]
      let randIndex = Math.floor(Math.random() * possibleScales.length)
      randScale = possibleScales[randIndex]
      rand1 = Math.floor(Math.random() * 22)
      
      
      switch (randIndex) {
        case 0:
          scaleName = "Major"
          break;
        case 1:
          scaleName = "Minor"
          break;
        case 2:
          scaleName = "Harmonic Minor"
          break;
        case 3:
          scaleName = "Melodic Minor"
          break;
        case 4:
          scaleName = "Dorian"
          break;
        case 5:
          scaleName = "Phrygian"
          break;
        case 6:
          scaleName = "Lydian"
          break;
        case 7:
          scaleName = "Mixolydian"
          break;
        case 8:
          scaleName = "Locrian"
          break;
        default:
          console.log("something wrong with switch");
      }


      play();
  }



  function play() {

    console.log(`randScale: ${randScale} - Rand1: ${rand1} `)

    let note1 = new Audio(piano[rand1])
    let note2 = new Audio(piano[rand1 + randScale[0]])
    let note3 = new Audio(piano[rand1 + randScale[1]])
    let note4 = new Audio(piano[rand1 + randScale[2]])
    let note5 = new Audio(piano[rand1 + randScale[3]])
    let note6 = new Audio(piano[rand1 + randScale[4]])
    let note7 = new Audio(piano[rand1 + randScale[5]])
    let note8 = new Audio(piano[rand1 + randScale[6]])

    let notes = [];
    notes.push(note1, note2, note3, note4, note5, note6, note7, note8)

    for (let i = 0; i < 8; i++) {   
        setTimeout(function(){
            notes[i].play()
            
        }, i * 300);
    }

  }



  function check(scale) {

    console.log(randScale, scale, scaleName)

    if (scale === scaleName) {
        setMessage("Correct")
        console.log("correct")
        randomize();
    } else {
        setMessage("Wrong!")
        console.log("wrong")
    }

  }


  return (
     <div className="homeNot">

      <div className="intervalScale">

        <h1>Scale Identification</h1>

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

              <button onClick={() => check("Major")} value="0">Major</button>
              <button onClick={() => check("Minor")}  value="1">Minor</button>
              <button onClick={() => check("Harmonic Minor")}  value="2">Harmonic Minor</button>
              <button onClick={() => check("Melodic Minor")}  value="3">Melodic Minor</button>
              <button onClick={() => check("Dorian")}  value="4">Dorian</button>
              <button onClick={() => check("Phrygian")}  value="5">Phrygian</button>
              <button onClick={() => check("Lydian")}  value="6">Lydian</button>
              <button onClick={() => check("Mixolydian")}  value="7">Mixolydian</button>
              <button onClick={() => check("Locrian")}  value="8">Locrian</button>


            </div>
            

      </div>
  
      <div></div>
      <div></div>

     </div>
  )
}

export default Scale;