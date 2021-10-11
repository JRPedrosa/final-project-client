import React, { useState, useEffect } from "react";


let rand1;
let randScale;
let scaleName = "";
let counter = 0;
let correct = 0;
let percent;

let piano = [
  new Audio("../2489__jobro__piano-ff/39172__jobro__piano-ff-025.wav"),
  new Audio("../2489__jobro__piano-ff/39173__jobro__piano-ff-026.wav"),
  new Audio("../2489__jobro__piano-ff/39174__jobro__piano-ff-027.wav"),
  new Audio("../2489__jobro__piano-ff/39175__jobro__piano-ff-028.wav"),
  new Audio("../2489__jobro__piano-ff/39176__jobro__piano-ff-029.wav"),
  new Audio("../2489__jobro__piano-ff/39177__jobro__piano-ff-030.wav"),
  new Audio("../2489__jobro__piano-ff/39178__jobro__piano-ff-031.wav"),
  new Audio("../2489__jobro__piano-ff/39179__jobro__piano-ff-032.wav"),
  new Audio("../2489__jobro__piano-ff/39180__jobro__piano-ff-033.wav"),
  new Audio("../2489__jobro__piano-ff/39181__jobro__piano-ff-034.wav"),
  new Audio("../2489__jobro__piano-ff/39182__jobro__piano-ff-035.wav"),
  new Audio("../2489__jobro__piano-ff/39183__jobro__piano-ff-036.wav"),
  new Audio("../2489__jobro__piano-ff/39184__jobro__piano-ff-037.wav"),
  new Audio("../2489__jobro__piano-ff/39185__jobro__piano-ff-038.wav"),
  new Audio("../2489__jobro__piano-ff/39186__jobro__piano-ff-039.wav"),
  new Audio("../2489__jobro__piano-ff/39187__jobro__piano-ff-040.wav"),
  new Audio("../2489__jobro__piano-ff/39188__jobro__piano-ff-041.wav"),
  new Audio("../2489__jobro__piano-ff/39189__jobro__piano-ff-042.wav"),
  new Audio("../2489__jobro__piano-ff/39190__jobro__piano-ff-043.wav"),
  new Audio("../2489__jobro__piano-ff/39191__jobro__piano-ff-044.wav"),
  new Audio("../2489__jobro__piano-ff/39193__jobro__piano-ff-045.wav"),
  new Audio("../2489__jobro__piano-ff/39194__jobro__piano-ff-046.wav"),
  new Audio("../2489__jobro__piano-ff/39195__jobro__piano-ff-047.wav"),
  new Audio("../2489__jobro__piano-ff/39196__jobro__piano-ff-048.wav"),
  new Audio("../2489__jobro__piano-ff/39197__jobro__piano-ff-049.wav"),
  new Audio("../2489__jobro__piano-ff/39198__jobro__piano-ff-050.wav"),
  new Audio("../2489__jobro__piano-ff/39199__jobro__piano-ff-051.wav"),
  new Audio("../2489__jobro__piano-ff/39200__jobro__piano-ff-052.wav"),
  new Audio("../2489__jobro__piano-ff/39201__jobro__piano-ff-053.wav"),
  new Audio("../2489__jobro__piano-ff/39202__jobro__piano-ff-054.wav"),
  new Audio("../2489__jobro__piano-ff/39203__jobro__piano-ff-055.wav"),
  new Audio("../2489__jobro__piano-ff/39204__jobro__piano-ff-056.wav"),
  new Audio("../2489__jobro__piano-ff/39205__jobro__piano-ff-057.wav"),
  new Audio("../2489__jobro__piano-ff/39206__jobro__piano-ff-058.wav"),
  new Audio("../2489__jobro__piano-ff/39207__jobro__piano-ff-059.wav"),
  new Audio("../2489__jobro__piano-ff/39208__jobro__piano-ff-060.wav"),
  new Audio("../2489__jobro__piano-ff/39209__jobro__piano-ff-061.wav"),
];


// let note1 = new Audio()
// let note2 = new Audio()
// let note3 = new Audio()
// let note4 = new Audio()
// let note5 = new Audio()
// let note6 = new Audio()
// let note7 = new Audio()
// let note8 = new Audio()

let note1
let note2 
let note3
let note4 
let note5 
let note6
let note7 
let note8 


function Scale() {
  
  
  const [message, setMessage] = useState("");

  const [animate, setAnimate] = useState(false);

  const [color, setColor] = useState(false);

  const [flash, setFlash] = useState("")

  const [checkScale, setCheckScale] = useState("");

  useEffect(() => {
    counter = 0;
        correct = 0;
        percent = null;
  }, [])


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


      play(false);
  }



  function play(repeat) {

    if (repeat) {
      
      console.log(`randScale: ${randScale} - Rand1: ${rand1} `)
  
      note1 = piano[rand1]
      note2 = piano[rand1 + randScale[0]]
      note3 = piano[rand1 + randScale[1]]
      note4 = piano[rand1 + randScale[2]]
      note5 = piano[rand1 + randScale[3]]
      note6 = piano[rand1 + randScale[4]]
      note7 = piano[rand1 + randScale[5]]
      note8 = piano[rand1 + randScale[6]]
  
      let notes = [];
      notes.push(note1, note2, note3, note4, note5, note6, note7, note8)
  
      notes[0].load()
      notes[1].load()
      notes[2].load()
      notes[3].load()
      notes[4].load()
      notes[5].load()
      notes[6].load()
      notes[7].load()
  
      for (let i = 0; i < 8; i++) {   
          setTimeout(function(){
              notes[i].play()
              
          }, i * 300);
      }

    } else {

      note1 = piano[rand1]
      note2 = piano[rand1 + randScale[0]]
      note3 = piano[rand1 + randScale[1]]
      note4 = piano[rand1 + randScale[2]]
      note5 = piano[rand1 + randScale[3]]
      note6 = piano[rand1 + randScale[4]]
      note7 = piano[rand1 + randScale[5]]
      note8 = piano[rand1 + randScale[6]]
  
      let notes = [];
      notes.push(note1, note2, note3, note4, note5, note6, note7, note8)
  
      notes[0].load()
      notes[1].load()
      notes[2].load()
      notes[3].load()
      notes[4].load()
      notes[5].load()
      notes[6].load()
      notes[7].load()

  
      //setTimeout(function(){
        
        for (let i = 0; i < 8; i++) {   
            setTimeout(function(){
                notes[i].play()
                
            }, i * 300);
        }
        
      // }, 1500);




    }


  }



  function check(scale) {
    setFlash(scaleName);
    setCheckScale(scale);

    // console.log(randScale, scale, scaleName)

    if (scale === scaleName) {
      counter++;
      correct++;
      percent = Math.floor((correct / counter) * 100);
        setAnimate(!animate);
        setColor(true);
        setMessage("Correct")
        console.log("correct")
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
        console.log("wrong")
        randomize();
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

              <button key={Math.random()} className={(flash === "Major" ? "right" : undefined) || (flash !== "Major" && checkScale === "Major" ? " wrong" : undefined)} onClick={() => check("Major")} value="0">Major</button>
              <button key={Math.random()} className={(flash === "Minor" ? "right" : undefined) || (flash !== "Minor" && checkScale === "Minor" ? " wrong" : undefined)} onClick={() => check("Minor")}  value="1">Minor</button>
              <button key={Math.random()} className={(flash === "Harmonic Minor" ? "right" : undefined) || (flash !== "Harmonic Minor" && checkScale === "Harmonic Minor" ? " wrong" : undefined)} onClick={() => check("Harmonic Minor")}  value="2">Harmonic Minor</button>
              <button key={Math.random()} className={(flash === "Melodic Minor" ? "right" : undefined) || (flash !== "Melodic Minor" && checkScale === "Melodic Minor" ? " wrong" : undefined)} onClick={() => check("Melodic Minor")}  value="3">Melodic Minor</button>
              <button key={Math.random()} className={(flash === "Dorian" ? "right" : undefined) || (flash !== "Dorian" && checkScale === "Dorian" ? " wrong" : undefined)} onClick={() => check("Dorian")}  value="4">Dorian</button>
              <button key={Math.random()} className={(flash === "Phrygian" ? "right" : undefined) || (flash !== "Phrygian" && checkScale === "Phrygian" ? " wrong" : undefined)} onClick={() => check("Phrygian")}  value="5">Phrygian</button>
              <button key={Math.random()} className={(flash === "Lydian" ? "right" : undefined) || (flash !== "Lydian" && checkScale === "Lydian" ? " wrong" : undefined)} onClick={() => check("Lydian")}  value="6">Lydian</button>
              <button key={Math.random()} className={(flash === "Mixolydian" ? "right" : undefined) || (flash !== "Mixolydian" && checkScale === "Mixolydian" ? " wrong" : undefined)} onClick={() => check("Mixolydian")}  value="7">Mixolydian</button>
              <button key={Math.random()} className={(flash === "Locrian" ? "right" : undefined) || (flash !== "Locrian" && checkScale === "Locrian" ? " wrong" : undefined)} onClick={() => check("Locrian")}  value="8">Locrian</button>


            </div>
            

      </div>
  
      <div></div>
      <div></div>

     </div>
  )
}

export default Scale;