import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoggedUserConsumer, LoggedUserProvider } from "../context/loggedUser";

function CreateScale() {
  const [name, setName] = useState("");
  const history = useHistory();
  // const [selected, setSelected] = useState([]);
  const [majorScale, setMajorScale] = useState(false);
  const [minorScale, setMinorScale] = useState(false);
  const [dorian, setDorian] = useState(false);
  const [phrygian, setPhrygian] = useState(false);
  const [lydian, setLydian] = useState(false);
  const [mixolydian, setMixolydian] = useState(false);
  const [locrian, setLocrian] = useState(false);
  const [harmonic, setHarmonic] = useState(false);
  const [melodic, setMelodic] = useState(false);
//   const [majorSixth, setMajorSixth] = useState(false);
//   const [minorSeventh, setMinorSeventh] = useState(false);
//   const [majorSeventh, setMajorSeventh] = useState(false);
//   const [octave, setOctave] = useState(false);

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
    // if (majorSixth) {
    //   possibleIntervals.push(9);
    // }
    // if (minorSeventh) {
    //   possibleIntervals.push(10);
    // }
    // if (majorSeventh) {
    //   possibleIntervals.push(11);
    // }
    // if (octave) {
    //   possibleIntervals.push(12);
    // }

    // setSelected([...selected, 2]);
    console.log(possibleScales);
    

    const body = {
      name,
      possibleScales,
      user: loggedInUser,
    };

    await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/create-scales`,
      body
    );
    history.push("/exercises");

    // setSelected([]);
  };

  return (
    <div>
      <h1>Select options</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="checkbox"
          name="0"
          value="check"
          onChange={(e) => setMajorScale(!majorScale)}
        />
        <label for="0">Major Scale</label>

        <input
          type="checkbox"
          name="1"
          onChange={(e) => setMinorScale(!minorScale)}
        />
        <label for="1">Minor Scale</label>

        <input type="checkbox"  name="7" onChange={(e) => setHarmonic(!harmonic)} />
        <label for="7">Harmonic Minor</label>

        <input type="checkbox"  name="8" onChange={(e) => setMelodic(!melodic)} />
        <label for="8">Melodic Minor</label>

        <input
          type="checkbox"
          name="2"
          onChange={(e) => setDorian(!dorian)}
        />
        <label for="2">Dorian</label>

          <input type="checkbox"  name="3" onChange={(e) => setPhrygian(!phrygian)} />
          <label for="3">Phrygian</label>

          <input type="checkbox"  name="4" onChange={(e) => setLydian(!lydian)} />
          <label for="4">Lydian</label>

          <input type="checkbox"  name="5" onChange={(e) => setMixolydian(!mixolydian)} />
          <label for="5">Mixolydian</label>

          <input type="checkbox"  name="6" onChange={(e) => setLocrian(!locrian)} />
          <label for="6">Locrian</label>


          {/* <input type="checkbox"  name="9" onChange={(e) => setMajorSixth(!majorSixth)} />
          <label for="9">9</label>

          <input type="checkbox"  name="10" onChange={(e) => setMinorSeventh(!minorSeventh)} />
          <label for="10">10</label>

          <input type="checkbox"  name="11" onChange={(e) => setMajorSeventh(!majorSeventh)} />
          <label for="11">11</label>

          <input type="checkbox"  name="12" onChange={(e) => setOctave(!octave)} />
          <label for="12">12</label> */}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateScale;