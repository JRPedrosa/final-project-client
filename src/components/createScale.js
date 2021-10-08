import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoggedUserConsumer } from "../context/loggedUser";
import { toast } from "react-toastify";

function CreateScale() {
  const [name, setName] = useState("");
  const history = useHistory();
  
  const [majorScale, setMajorScale] = useState(false);
  const [minorScale, setMinorScale] = useState(false);
  const [dorian, setDorian] = useState(false);
  const [phrygian, setPhrygian] = useState(false);
  const [lydian, setLydian] = useState(false);
  const [mixolydian, setMixolydian] = useState(false);
  const [locrian, setLocrian] = useState(false);
  const [harmonic, setHarmonic] = useState(false);
  const [melodic, setMelodic] = useState(false);


const loggedInUser = useContext(LoggedUserConsumer)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const possibleScales = [];

    if (majorScale) {
        possibleScales.push([2, 4, 5, 7, 9, 11, 12]);  //[2, 4, 5, 7, 9, 11, 12]
    }

    if (minorScale) {
        possibleScales.push([2, 3, 5, 7, 8, 10, 12]);  //[2, 3, 5, 7, 8, 10, 12]
    }

    if (dorian) {
        possibleScales.push([2, 3, 5, 7, 9, 10, 12]);  //[2, 3, 5, 7, 9, 10, 12]
    }
    if (phrygian) {
        possibleScales.push([1, 3, 5, 7, 8, 10, 12]);  //[1, 3, 5, 7, 8, 10, 12]
    }
    if (lydian) {
        possibleScales.push([2, 4, 6, 7, 9, 11, 12]);  //[2, 4, 6, 7, 9, 11, 12]
    }
    if (mixolydian) {
        possibleScales.push([2, 4, 5, 7, 9, 10, 12]);  //[2, 4, 5, 7, 9, 10, 12]
    }
    if (locrian) {
        possibleScales.push([1, 3, 5, 6, 8, 10, 12]);  //[1, 3, 5, 6, 8, 10, 12]
    }
    if (harmonic) {
      possibleScales.push([2, 3, 5, 7, 8, 11, 12]);
    }
    if (melodic) {
      possibleScales.push([2, 3, 5, 7, 9, 11, 12]);
    }

    console.log(possibleScales);
    

    const body = {
      name,
      possibleScales,
      user: loggedInUser,
    };

    try {
      
      const response = await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/create-scales`, body,  {withCredentials: true});

      if (response.data.name) {
        toast.success("Exercise created");
        history.push("/exercises");

      }

    } catch (e) {
      toast.error("Missing Fields");
    }

  };

  return (
    <div  className="homeNot">

      <div className="create">
              <h1>Select options</h1>

              <form className="createForm" onSubmit={handleFormSubmit}>

                <div className="formFlex name">
                  <label>Name: </label>
                  <input
                    maxlength="30"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  </div>
                  <br></br>

                <div className="formFlex">
                  <label for="0">Major</label>
                  <input
                    type="checkbox"
                    name="0"
                    value="check"
                    onChange={(e) => setMajorScale(!majorScale)}
                  />
                  </div>

                <div className="formFlex">

                  <label for="1">Minor</label>
                  <input
                    type="checkbox"
                    name="1"
                    onChange={(e) => setMinorScale(!minorScale)}
                  />
                  </div>

                <div className="formFlex">

                  <label for="7">Harmonic Minor</label>
                  <input type="checkbox"  name="7" onChange={(e) => setHarmonic(!harmonic)} />
                  </div>

                <div className="formFlex">

                  <label for="8">Melodic Minor</label>
                  <input type="checkbox"  name="8" onChange={(e) => setMelodic(!melodic)} />
                  </div>

                <div className="formFlex">

                  <label for="2">Dorian</label>
                  <input
                    type="checkbox"
                    name="2"
                    onChange={(e) => setDorian(!dorian)}
                  />
                  </div>

                <div className="formFlex">

                  <label for="3">Phrygian</label>
                  <input type="checkbox"  name="3" onChange={(e) => setPhrygian(!phrygian)} />
                  </div>

                <div className="formFlex">

                  <label for="4">Lydian</label>
                  <input type="checkbox"  name="4" onChange={(e) => setLydian(!lydian)} />
                  </div>

                <div className="formFlex">

                  <label for="5">Mixolydian</label>
                  <input type="checkbox"  name="5" onChange={(e) => setMixolydian(!mixolydian)} />
                  </div>

                <div className="formFlex">

                  <label for="6">Locrian</label>
                  <input type="checkbox"  name="6" onChange={(e) => setLocrian(!locrian)} />
                  </div>

                  <br></br>


                <button type="submit">Create</button>

              </form>

          </div>

          <div></div>
          <div></div>
          <div></div>

    </div>
  );
}

export default CreateScale;