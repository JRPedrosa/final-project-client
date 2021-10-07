import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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



function OneExerciseScale(props) {

  const [message, setMessage] = useState("");
  const [possibleScales, setPossibleScales] = useState([])
  const [exerciseName, setExerciseName] = useState("")

  const [animate, setAnimate] = useState(false);

  const [color, setColor] = useState(false);



  useEffect(() => {
    async function getOneScaleExercise() {
       const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/scales/${props.match.params.id}`, { withCredentials: true});
       setPossibleScales(response.data.possibleScales);
       setExerciseName(response.data.name)
    //    for (let i = 0; i < intervals.length; i++) {
    //        possibleIntervals.push(intervals[i]);
    //    }
    
    }
    getOneScaleExercise();
    
   
    
}, [])

  function randomize() {

      
      let randIndex = Math.floor(Math.random() * possibleScales.length)
      randScale = possibleScales[randIndex]
      rand1 = Math.floor(Math.random() * 22)
      
      console.log(possibleScales)
      
      if (randScale.includes(4) && randScale.includes(5) && randScale.includes(11)) {
        scaleName = "Major Scale"
      }  
      if (randScale.includes(4) && randScale.includes(6)) {
        scaleName = "Lydian"
      } 
      if (randScale.includes(4) && randScale.includes(10)) {
        scaleName = "Mixolydian"
      } 
      if (randScale.includes(2) && randScale.includes(3) && randScale.includes(8) && randScale.includes(10)) {
        scaleName = "Minor Scale"
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

    console.log(notes)
  }



  function check(scale) {

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
      if (correct > 0) {
        correct--;
      }
      percent = Math.floor((correct / counter) * 100);

        setAnimate(!animate);
        setColor(false);
        setMessage("Wrong!")
        console.log("wrong")
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

       

                <button onClick={() => randomize()}>Play New Scale</button>
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

            {checkScale([2, 4, 5, 7, 9, 11, 12]) && 
            <button onClick={() => check("Major Scale")} value="0">Major</button>
            }
            {checkScale([2, 3, 5, 7, 8, 10, 12]) && 
            <button onClick={() => check("Minor Scale")}  value="1">Minor</button>
            }
            {checkScale([2, 3, 5, 7, 8, 11, 12]) && 
            <button onClick={() => check("Harmonic Minor")}  value="7">Harmonic Minor</button>
            }
            {checkScale([2, 3, 5, 7, 9, 11, 12]) && 
            <button onClick={() => check("Melodic Minor")}  value="8">Melodic Minor</button>
            }
            {checkScale([2, 3, 5, 7, 9, 10, 12]) && 
            <button onClick={() => check("Dorian")}  value="2">Dorian</button>
            }
            {checkScale([1, 3, 5, 7, 8, 10, 12]) && 
            <button onClick={() => check("Phrygian")}  value="3">Phrygian</button>
            }
            {checkScale([2, 4, 6, 7, 9, 11, 12]) && 
            <button onClick={() => check("Lydian")}  value="4">Lydian</button>
            }
            {checkScale([2, 4, 5, 7, 9, 10, 12]) && 
            <button onClick={() => check("Mixolydian")}  value="5">Mixolydian</button>
            }
            {checkScale([1, 3, 5, 6, 8, 10, 12]) && 
            <button onClick={() => check("Locrian")}  value="6">Locrian</button>
            }
        
        </div>


        </div>
  
      <div></div>
      <div></div>
        

     </div>
  )
}

export default OneExerciseScale;