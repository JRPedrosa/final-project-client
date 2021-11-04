import React, { useState, useEffect } from "react";
import axios from "axios";

let rand1;
let randScale;
let scaleName = "";
let counter = 0;
let correct = 0;
let percent;


function OneExerciseArpeggio({ match, piano }) {

  const [message, setMessage] = useState("");
  const [possibleScales, setPossibleScales] = useState([])
  const [exerciseName, setExerciseName] = useState("")

  const [animate, setAnimate] = useState(false);

  const [color, setColor] = useState(false);

  const [flash, setFlash] = useState("")

  const [checkScaleButton, setCheckScaleButton] = useState("");



  useEffect(() => {
    async function getOneScaleExercise() {
       const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/arpeggios/${match.params.id}`, { withCredentials: true});
       setPossibleScales(response.data.possibleScales);
       setExerciseName(response.data.name)

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