import React, { useState, useEffect } from "react";

let rand1;
let randScale;
let scaleName = "";
let counter = 0;
let correct = 0;
let percent;

let note1 = new Audio()
let note2 = new Audio()
let note3 = new Audio()

function Arpeggio( {piano} ) {
  
  
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
        [4, 7],
        [3, 8],
        [5, 9],
        [3, 7],
        [4, 9],
        [5, 8],
        [3, 6],
        [3, 9],
        [6, 9],
      ]
      let randIndex = Math.floor(Math.random() * possibleScales.length)
      randScale = possibleScales[randIndex]
      rand1 = Math.floor(Math.random() * 22)
      
      
      switch (randIndex) {
        case 0:
          scaleName = "Maj"
          break;
        case 1:
          scaleName = "Maj1"
          break;
        case 2:
          scaleName = "Maj2"
          break;
        case 3:
          scaleName = "Min"
          break;
        case 4:
          scaleName = "Min1"
          break;
        case 5:
          scaleName = "Min2"
          break;
        case 6:
          scaleName = "Dim"
          break;
        case 7:
          scaleName = "Dim1"
          break;
        case 8:
          scaleName = "Dim2"
          break;
        default:
          console.log("something wrong with switch");
      }


      play(false);
  }



  async function play(repeat) {

    if (repeat) {
        console.log(`randScale: ${randScale} - Rand1: ${rand1} `)
    
        note1 = new Audio(piano[rand1])
        note2 = new Audio(piano[rand1 + randScale[0]])
        note3 = new Audio(piano[rand1 + randScale[1]])
    
    
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

        note1 = new Audio(piano[rand1])
        note2 = new Audio(piano[rand1 + randScale[0]])
        note3 = new Audio(piano[rand1 + randScale[1]])
    
    
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

        <h1>Arpeggio Identification</h1>

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

              <button key={Math.random()} className={(flash === "Maj" ? "right" : undefined) || (flash !== "Maj" && checkScale === "Maj" ? " wrong" : undefined)} onClick={() => check("Maj")} value="0">Major Root</button>
              <button key={Math.random()} className={(flash === "Maj1" ? "right" : undefined) || (flash !== "Maj1" && checkScale === "Maj1" ? " wrong" : undefined)} onClick={() => check("Maj1")}  value="1">Major 1º Inv.</button>
              <button key={Math.random()} className={(flash === "Maj2" ? "right" : undefined) || (flash !== "Maj2" && checkScale === "Maj2" ? " wrong" : undefined)} onClick={() => check("Maj2")}  value="2">Major 2º Inv.</button>
              <button key={Math.random()} className={(flash === "Min" ? "right" : undefined) || (flash !== "Min" && checkScale === "Min" ? " wrong" : undefined)} onClick={() => check("Min")}  value="3">Minor Root</button>
              <button key={Math.random()} className={(flash === "Min1" ? "right" : undefined) || (flash !== "Min1" && checkScale === "Min1" ? " wrong" : undefined)} onClick={() => check("Min1")}  value="4">Minor 1º Inv.</button>
              <button key={Math.random()} className={(flash === "Min2" ? "right" : undefined) || (flash !== "Min2" && checkScale === "Min2" ? " wrong" : undefined)} onClick={() => check("Min2")}  value="5">Minor 2º Inv.</button>
              <button key={Math.random()} className={(flash === "Dim" ? "right" : undefined) || (flash !== "Dim" && checkScale === "Dim" ? " wrong" : undefined)} onClick={() => check("Dim")}  value="3">Diminished Root</button>
              <button key={Math.random()} className={(flash === "Dim1" ? "right" : undefined) || (flash !== "Dim1" && checkScale === "Dim1" ? " wrong" : undefined)} onClick={() => check("Dim1")}  value="3">Diminished 1º Inv.</button>
              <button key={Math.random()} className={(flash === "Dim2" ? "right" : undefined) || (flash !== "Dim2" && checkScale === "Dim2" ? " wrong" : undefined)} onClick={() => check("Dim2")}  value="3">Diminished 2º Inv.</button>
              
            </div>
            

      </div>
  
      <div></div>
      <div></div>

     </div>
  )
}

export default Arpeggio;