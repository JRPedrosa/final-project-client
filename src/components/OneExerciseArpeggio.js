import React, { useState, useEffect } from "react";
import axios from "axios";

let rand1;
let randScale;
let scaleName = "";
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



function OneExerciseArpeggio(props) {

  const [message, setMessage] = useState("");
  const [possibleScales, setPossibleScales] = useState([])
  const [exerciseName, setExerciseName] = useState("")

  const [animate, setAnimate] = useState(false);

  const [color, setColor] = useState(false);

  const [flash, setFlash] = useState("")

  const [checkScaleButton, setCheckScaleButton] = useState("");



  useEffect(() => {
    async function getOneScaleExercise() {
       const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/arpeggios/${props.match.params.id}`, { withCredentials: true});
       setPossibleScales(response.data.possibleScales);
       setExerciseName(response.data.name)
    //    for (let i = 0; i < intervals.length; i++) {
    //        possibleIntervals.push(intervals[i]);
    //    }
    
    }
    getOneScaleExercise();

    counter = 0;
        correct = 0;
        percent = null;
    
   
    
}, [])

  function randomize() {

      
      let randIndex = Math.floor(Math.random() * possibleScales.length)
      randScale = possibleScales[randIndex]
      rand1 = Math.floor(Math.random() * 22)
      
      console.log(possibleScales)
      
      if (randScale.includes(4) && randScale.includes(7)) {
        scaleName = "Maj"
      }  
      if (randScale.includes(3) && randScale.includes(8)) {
        scaleName = "Maj1"
      } 
      if (randScale.includes(5) && randScale.includes(9)) {
        scaleName = "Maj2"
      } 
      if (randScale.includes(3) && randScale.includes(7)) {
        scaleName = "Min"
      } 
      if (randScale.includes(4) && randScale.includes(9)) {
        scaleName = "Min1"
      } 
      if (randScale.includes(5) && randScale.includes(8)) {
        scaleName = "Min2"
      } 
      if (randScale.includes(3) && randScale.includes(6)) {
        scaleName = "Dim"
      };
      if (randScale.includes(3) && randScale.includes(9)) {
        scaleName = "Dim1"
      };
      if (randScale.includes(6) && randScale.includes(9)) {
        scaleName = "Dim2"
      };


      play(false);
  }



  function play(repeat) {

    if (repeat) {
      console.log(`randScale: ${randScale} - Rand1: ${rand1} `)
  
      let note1 = new Audio(piano[rand1])
      let note2 = new Audio(piano[rand1 + randScale[0]])
      let note3 = new Audio(piano[rand1 + randScale[1]])
      
  
      let notes = [];
      notes.push(note1, note2, note3)
  
      notes[0].load()
      notes[1].load()
      notes[2].load()
      
  
      setTimeout(function(){
        
        for (let i = 0; i < 3; i++) {   
            setTimeout(function(){
                notes[i].play()
                
            }, i * 400);
        }
        
    }, 1000);

    } else {

      let note1 = new Audio(piano[rand1])
      let note2 = new Audio(piano[rand1 + randScale[0]])
      let note3 = new Audio(piano[rand1 + randScale[1]])
      
  
      let notes = [];
      notes.push(note1, note2, note3)
  
      notes[0].load()
      notes[1].load()
      notes[2].load()
      
  
      setTimeout(function(){
        
        for (let i = 0; i < 3; i++) {   
            setTimeout(function(){
                notes[i].play()
                
            }, i * 400);
        }
        
    }, 1500);

    }


    
  }



  function check(scale) {
    setFlash(scaleName);
    setCheckScaleButton(scale);

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

    console.log(randScale, scale, scaleName)
  }

 function checkScale(scale) {
    let found = false;
    possibleScales.forEach((_scale) => {
       const allExist = _scale.every((note) => scale.includes(note));
       if (allExist) {
         found = true;
       }
    });

    return found;
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

            {checkScale([4, 7]) && 
                <button key={Math.random()} className={(flash === "Maj" ? "right" : undefined) || (flash !== "Maj" && checkScaleButton === "Maj" ? " wrong" : undefined)} onClick={() => check("Maj")} value="0">Major Root</button>            
            }
            {checkScale([3, 8]) && 
                <button key={Math.random()} className={(flash === "Maj1" ? "right" : undefined) || (flash !== "Maj1" && checkScaleButton === "Maj1" ? " wrong" : undefined)} onClick={() => check("Maj1")}  value="1">Major 1º Inv.</button>
            }
            {checkScale([5, 9]) && 
                <button key={Math.random()} className={(flash === "Maj2" ? "right" : undefined) || (flash !== "Maj2" && checkScaleButton === "Maj2" ? " wrong" : undefined)} onClick={() => check("Maj2")}  value="2">Major 2º Inv.</button>
            }
            {checkScale([3, 7]) && 
                <button key={Math.random()} className={(flash === "Min" ? "right" : undefined) || (flash !== "Min" && checkScaleButton === "Min" ? " wrong" : undefined)} onClick={() => check("Min")}  value="3">Minor Root</button>
            }
            {checkScale([4, 9]) && 
                <button key={Math.random()} className={(flash === "Min1" ? "right" : undefined) || (flash !== "Min1" && checkScaleButton === "Min1" ? " wrong" : undefined)} onClick={() => check("Min1")}  value="4">Minor 1º Inv.</button>
            }
            {checkScale([5, 8]) && 
                <button key={Math.random()} className={(flash === "Min2" ? "right" : undefined) || (flash !== "Min2" && checkScaleButton === "Min2" ? " wrong" : undefined)} onClick={() => check("Min2")}  value="5">Minor 2º Inv.</button>
            }
            {checkScale([3, 6]) && 
                <button key={Math.random()} className={(flash === "Dim" ? "right" : undefined) || (flash !== "Dim" && checkScaleButton === "Dim" ? " wrong" : undefined)} onClick={() => check("Dim")}  value="3">Diminished Root</button>
            }
            {checkScale([3, 9]) && 
                <button key={Math.random()} className={(flash === "Dim1" ? "right" : undefined) || (flash !== "Dim1" && checkScaleButton === "Dim1" ? " wrong" : undefined)} onClick={() => check("Dim1")}  value="3">Diminished 1º Inv.</button>
            }
            {checkScale([6, 9]) && 
                <button key={Math.random()} className={(flash === "Dim2" ? "right" : undefined) || (flash !== "Dim2" && checkScaleButton === "Dim2" ? " wrong" : undefined)} onClick={() => check("Dim2")}  value="3">Diminished 2º Inv.</button>
            }
        
        </div>


        </div>
  
      <div></div>
      <div></div>
        

     </div>
  )
}

export default OneExerciseArpeggio;