import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoggedUserConsumer, LoggedUserProvider } from "../context/loggedUser";

function CreateInterval() {
  const [name, setName] = useState("");
  const history = useHistory();
  // const [selected, setSelected] = useState([]);
  const [unisson, setUnisson] = useState(false);
  const [minorSecond, setMinorSecond] = useState(false);
  const [majorSecond, setMajorSecond] = useState(false);
  const [minorThird, setMinorThird] = useState(false);
  const [majorThird, setMajorThird] = useState(false);
  const [perfectFourth, setPerfectFourth] = useState(false);
  const [tritone, setTritone] = useState(false);
  const [perfectFifth, setPerfectFifth] = useState(false);
  const [minorSixth, setMinorSixth] = useState(false);
  const [majorSixth, setMajorSixth] = useState(false);
  const [minorSeventh, setMinorSeventh] = useState(false);
  const [majorSeventh, setMajorSeventh] = useState(false);
  const [octave, setOctave] = useState(false);

  const [direction, setDirection] = useState("")

  const loggedInUser = useContext(LoggedUserConsumer)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const possibleIntervals = [];

    if (unisson) {
      possibleIntervals.push(0);
    }

    if (minorSecond) {
      possibleIntervals.push(1);
    }

    if (majorSecond) {
      possibleIntervals.push(2);
    }
    if (minorThird) {
      possibleIntervals.push(3);
    }
    if (majorThird) {
      possibleIntervals.push(4);
    }
    if (perfectFourth) {
      possibleIntervals.push(5);
    }
    if (tritone) {
      possibleIntervals.push(6);
    }
    if (perfectFifth) {
      possibleIntervals.push(7);
    }
    if (minorSixth) {
      possibleIntervals.push(8);
    }
    if (majorSixth) {
      possibleIntervals.push(9);
    }
    if (minorSeventh) {
      possibleIntervals.push(10);
    }
    if (majorSeventh) {
      possibleIntervals.push(11);
    }
    if (octave) {
      possibleIntervals.push(12);
    }

    // setSelected([...selected, 2]);
    console.log(possibleIntervals);
    

    const body = {
      name,
      possibleIntervals,
      user: loggedInUser,
      direction,
    };

    await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/interval`,
      body, {withCredentials: true}
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
          onChange={(e) => setUnisson(!unisson)}
        />
        <label for="0">0</label>

        <input
          type="checkbox"
          name="1"
          onChange={(e) => setMinorSecond(!minorSecond)}
        />
        <label for="1">1</label>

        <input
          type="checkbox"
          name="2"
          onChange={(e) => setMajorSecond(!majorSecond)}
        />
        <label for="2">2</label>

        <input type="checkbox"  name="3" onChange={(e) => setMinorThird(!minorThird)} />
          <label for="3">3</label>

          <input type="checkbox"  name="4" onChange={(e) => setMajorThird(!majorThird)} />
          <label for="4">4</label>

          <input type="checkbox"  name="5" onChange={(e) => setPerfectFourth(!perfectFourth)} />
          <label for="5">5</label>

          <input type="checkbox"  name="6" onChange={(e) => setTritone(!tritone)} />
          <label for="6">6</label>

          <input type="checkbox"  name="7" onChange={(e) => setPerfectFifth(!perfectFifth)} />
          <label for="7">7</label>

          <input type="checkbox"  name="8" onChange={(e) => setMinorSixth(!minorSixth)} />
          <label for="8">8</label>

          <input type="checkbox"  name="9" onChange={(e) => setMajorSixth(!majorSixth)} />
          <label for="9">9</label>

          <input type="checkbox"  name="10" onChange={(e) => setMinorSeventh(!minorSeventh)} />
          <label for="10">10</label>

          <input type="checkbox"  name="11" onChange={(e) => setMajorSeventh(!majorSeventh)} />
          <label for="11">11</label>

          <input type="checkbox"  name="12" onChange={(e) => setOctave(!octave)} />
          <label for="12">12</label>

          <label for="direction">Direction:</label>
          <select id="direction" name="direction" onChange={(e) => setDirection(e.target.value)}>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>

        <button type="submit">Create</button>  
        
        {/* DISPLAY MESSAGE MISSING FIELDS */}
      
      </form>
    </div>
  );
}

export default CreateInterval;
