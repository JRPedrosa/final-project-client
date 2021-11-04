import React, { useState, useEffect } from "react";
import "animate.css";

let rand1;
let rand2;
let randInterval;
let counter = 0;
let correct = 0;
let percent;

let note1;
let note2;


function Interval( {piano} ) {
  
  const [message, setMessage] = useState("");
  
  const [animate, setAnimate] = useState(false);
  
  const [color, setColor] = useState(false);
  
  const [flash, setFlash] = useState(null)
  
  const [checkNum, setCheckNum] = useState(null);

  useEffect(() => {
    counter = 0;
        correct = 0;
        percent = null;
  }, [])
  
  
  function randomize() {
    
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
      let possibleIntervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      randInterval = possibleIntervals[Math.floor(Math.random() * possibleIntervals.length)]
      rand1 = Math.floor(Math.random() * 24)
      rand2 = rand1 + randInterval
      play(false);
  }


  function play(repeat) {

    if (repeat) {
      
      note1 = new Audio(piano[rand1])
      note2 = new Audio(piano[rand2])

      note1.load()
      note2.load()

      note1.play()
      setTimeout(function(){
        note1.pause();
        note2.play(); 
        }, 1000);
    } else {

      note1 = new Audio(piano[rand1])
      note2 = new Audio(piano[rand2])

      note1.load()
      note2.load()


      setTimeout(function(){
        
        note1.play()
        setTimeout(function(){
          note1.pause();
          note2.play(); 
          }, 800);

        }, 1000);


    }

    // console.log(`Interval: ${randInterval} - Rand1: ${rand1} - rand2: ${rand2} `)
  }



  function check(num) {
    setFlash(randInterval);
    setCheckNum(num);

    if (num === randInterval) {
      counter++;
      correct++;
      percent = Math.floor((correct / counter) * 100);

      console.log(`Counter: ${counter} -- Correct: ${correct} -- Percent: ${percent}`)
      setAnimate(!animate);
      setColor(true);
      setMessage("Correct")
      randomize();


    } else { 

      counter++;

      percent = Math.floor((correct / counter) * 100);
      console.log(`Counter: ${counter} -- Correct: ${correct} -- Percent: ${percent}`)
      setAnimate(!animate);
      setColor(false);
      setMessage("Wrong!")
      randomize();
      
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

                <button onClick={() => randomize()}>Play New</button>

                <button onClick={() => play(true)}>Repeat</button>
              
              <div></div>
              <div></div>
              <div></div>

            </div>

            <br></br>

            {percent ? <p className="percent" >{percent}%</p> : <p className="percent" >{correct}</p> }
            
            
            
            

          
            <h2 key={animate} className={"animate__animated animate__bounceIn" + (color ? " green" : " red")}>{message}</h2>
          

            <br></br><br></br>

            <div className="exButtons">

              <button key={Math.random()}  onClick={() => check(0)} className={(flash === 0 ? "right" : undefined) || (flash !== 0 && checkNum === 0 ? " wrong" : undefined)} value="0">Unisson</button>
              <button key={Math.random()}  onClick={() => check(1)} className={(flash === 1 ? "right" : undefined) || (flash !== 1 && checkNum === 1 ? " wrong" : undefined)} value="1">Minor Second</button>
              <button key={Math.random()}  onClick={() => check(2)} className={(flash === 2 ? "right" : undefined) || (flash !== 2 && checkNum === 2 ? " wrong" : undefined)} value="2">Major Second</button>
              <button key={Math.random()}  onClick={() => check(3)} className={(flash === 3 ? "right" : undefined) || (flash !== 3 && checkNum === 3 ? " wrong" : undefined)} value="3">Minor Third</button>
              <button key={Math.random()}  onClick={() => check(4)} className={(flash === 4 ? "right" : undefined) || (flash !== 4 && checkNum === 4 ? " wrong" : undefined)} value="4">Major Third</button>
              <button key={Math.random()}  onClick={() => check(5)} className={(flash === 5 ? "right" : undefined) || (flash !== 5 && checkNum === 5 ? " wrong" : undefined)} value="5">Perfect Fourth</button>
              <button key={Math.random()}  onClick={() => check(6)} className={(flash === 6 ? "right" : undefined) || (flash !== 6 && checkNum === 6 ? " wrong" : undefined)} value="6">Tritone</button>
              <button key={Math.random()}  onClick={() => check(7)} className={(flash === 7 ? "right" : undefined) || (flash !== 7 && checkNum === 7 ? " wrong" : undefined)} value="7">Perfect Fifth</button>
              <button key={Math.random()}  onClick={() => check(8)} className={(flash === 8 ? "right" : undefined) || (flash !== 8 && checkNum === 8 ? " wrong" : undefined)} value="8">Minor Sixth</button>
              <button key={Math.random()}  onClick={() => check(9)} className={(flash === 9 ? "right" : undefined) || (flash !== 9 && checkNum === 9 ? " wrong" : undefined)} value="9">Major Sixth</button>
              <button key={Math.random()}  onClick={() => check(10)} className={(flash === 10 ? "right" : undefined) || (flash !== 10 && checkNum === 10 ? " wrong" : undefined)} value="10">Minor Seventh</button>
              <button key={Math.random()}  onClick={() => check(11)} className={(flash === 11 ? "right" : undefined) || (flash !== 11 && checkNum === 11 ? " wrong" : undefined)} value="11">Major Seventh</button>
              <button key={Math.random()}  onClick={() => check(12)} className={(flash === 12 ? "right" : undefined) || (flash !== 12 && checkNum === 12 ? " wrong" : undefined)} value="12">Octave</button>

            </div>
            


        </div>

        <div></div>
        <div></div>
       

     </div>
  )
}

export default Interval;