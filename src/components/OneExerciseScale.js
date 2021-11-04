import React, { useState, useEffect } from "react";
import axios from "axios";

let rand1;
let randScale;
let scaleName = "";
let counter = 0;
let correct = 0;
let percent;


function OneExerciseScale({match, piano}) {

  const [message, setMessage] = useState("");
  const [possibleScales, setPossibleScales] = useState([])
  const [exerciseName, setExerciseName] = useState("")

  const [animate, setAnimate] = useState(false);

  const [color, setColor] = useState(false);

  const [flash, setFlash] = useState("")

  const [checkScaleButton, setCheckScaleButton] = useState("");



  useEffect(() => {
    async function getOneScaleExercise() {
       const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/scales/${match.params.id}`, { withCredentials: true});
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
      
      if (randScale.includes(4) && randScale.includes(5) && randScale.includes(11)) {
        scaleName = "Major"
      }  
      if (randScale.includes(4) && randScale.includes(6)) {
        scaleName = "Lydian"
      } 
      if (randScale.includes(4) && randScale.includes(10)) {
        scaleName = "Mixolydian"
      } 
      if (randScale.includes(2) && randScale.includes(3) && randScale.includes(8) && randScale.includes(10)) {
        scaleName = "Minor"
      } 
      if (randScale.includes(3) && randScale.includes(9) && randScale.includes(10)) {
        scaleName = "Dorian"
      } 
      if (randScale.includes(1) && randScale.includes(7)) {
        scaleName = "Phrygian"
      } 
      if (randScale.includes(1) && randScale.includes(6)) {
        scaleName = "Locrian"
      };
      if (randScale.includes(3) && randScale.includes(8) && randScale.includes(11)) {
        scaleName = "Harmonic Minor"
      };
      if (randScale.includes(3) && randScale.includes(9) && randScale.includes(11)) {
        scaleName = "Melodic Minor"
      };


      play(false);
  }



  function play(repeat) {

    if (repeat) {
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
  
      notes[0].load()
      notes[1].load()
      notes[2].load()
      notes[3].load()
      notes[4].load()
      notes[5].load()
      notes[6].load()
      notes[7].load()
  
      setTimeout(function(){
       
        for (let i = 0; i < 8; i++) {   
            setTimeout(function(){
                notes[i].play()
                
            }, i * 300);
        }
        
    }, 1000);

    } else {

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
  
      notes[0].load()
      notes[1].load()
      notes[2].load()
      notes[3].load()
      notes[4].load()
      notes[5].load()
      notes[6].load()
      notes[7].load()
  

      setTimeout(function(){
       
        for (let i = 0; i < 8; i++) {   
            setTimeout(function(){
                notes[i].play()
                
            }, i * 300);
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

            {checkScale([2, 4, 5, 7, 9, 11, 12]) && 
            <button  key={Math.random()} className={(flash === "Major" ? "right" : undefined) || (flash !== "Major" && checkScaleButton === "Major" ? " wrong" : undefined)} onClick={() => check("Major")} value="0">Major</button>
            }
            {checkScale([2, 3, 5, 7, 8, 10, 12]) && 
            <button key={Math.random()} className={(flash === "Minor" ? "right" : undefined) || (flash !== "Minor" && checkScaleButton === "Minor" ? " wrong" : undefined)} onClick={() => check("Minor")}  value="1">Minor</button>
            }
            {checkScale([2, 3, 5, 7, 8, 11, 12]) && 
            <button key={Math.random()} className={(flash === "Harmonic Minor" ? "right" : undefined) || (flash !== "Harmonic Minor" && checkScaleButton === "Harmonic Minor" ? " wrong" : undefined)} onClick={() => check("Harmonic Minor")}  value="7">Harmonic Minor</button>
            }
            {checkScale([2, 3, 5, 7, 9, 11, 12]) && 
            <button key={Math.random()} className={(flash === "Melodic Minor" ? "right" : undefined) || (flash !== "Melodic Minor" && checkScaleButton === "Melodic Minor" ? " wrong" : undefined)} onClick={() => check("Melodic Minor")}  value="8">Melodic Minor</button>
            }
            {checkScale([2, 3, 5, 7, 9, 10, 12]) && 
            <button key={Math.random()} className={(flash === "Dorian" ? "right" : undefined) || (flash !== "Dorian" && checkScaleButton === "Dorian" ? " wrong" : undefined)} onClick={() => check("Dorian")}  value="2">Dorian</button>
            }
            {checkScale([1, 3, 5, 7, 8, 10, 12]) && 
            <button key={Math.random()} className={(flash === "Phrygian" ? "right" : undefined) || (flash !== "Phrygian" && checkScaleButton === "Phrygian" ? " wrong" : undefined)} onClick={() => check("Phrygian")}  value="3">Phrygian</button>
            }
            {checkScale([2, 4, 6, 7, 9, 11, 12]) && 
            <button key={Math.random()} className={(flash === "Lydian" ? "right" : undefined) || (flash !== "Lydian" && checkScaleButton === "Lydian" ? " wrong" : undefined)} onClick={() => check("Lydian")}  value="4">Lydian</button>
            }
            {checkScale([2, 4, 5, 7, 9, 10, 12]) && 
            <button key={Math.random()} className={(flash === "Mixolydian" ? "right" : undefined) || (flash !== "Mixolydian" && checkScaleButton === "Mixolydian" ? " wrong" : undefined)} onClick={() => check("Mixolydian")}  value="5">Mixolydian</button>
            }
            {checkScale([1, 3, 5, 6, 8, 10, 12]) && 
            <button key={Math.random()} className={(flash === "Locrian" ? "right" : undefined) || (flash !== "Locrian" && checkScaleButton === "Locrian" ? " wrong" : undefined)} onClick={() => check("Locrian")}  value="6">Locrian</button>
            }
        
        </div>


        </div>
  
      <div></div>
      <div></div>
        

     </div>
  )
}

export default OneExerciseScale;