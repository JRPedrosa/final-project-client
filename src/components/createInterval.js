import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoggedUserConsumer } from "../context/loggedUser";
import { toast } from "react-toastify";

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


    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/interval`,
        body, {withCredentials: true}
      );

      if (response.data.name) {
        toast.success("Exercise created");
        history.push("/exercises");

      }

    } catch (e) {
      toast.error("Missing Fields");
    }

  
  };

  return (
    <div className="homeNot">

        <div className="create">

          <h1>Select options</h1>

          <form  className="createForm" onSubmit={handleFormSubmit}>

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
              <label for="0">Unisson</label>
              <input
                type="checkbox"
                name="0"
                value="check"
                onChange={(e) => setUnisson(!unisson)}
              />
            </div>

            <div className="formFlex">
              <label for="1">Minor Second</label>
              <input
                type="checkbox"
                name="1"
                onChange={(e) => setMinorSecond(!minorSecond)}
              />
            </div>

            <div className="formFlex">
              <label for="2">Major Second</label>
              <input
                type="checkbox"
                name="2"
                onChange={(e) => setMajorSecond(!majorSecond)}
              />
            </div>


            <div className="formFlex">
              <label for="3">Minor Third</label>
              <input type="checkbox"  name="3" onChange={(e) => setMinorThird(!minorThird)} />
            </div>

            <div className="formFlex">
              <label for="4">Major Third</label>
              <input type="checkbox"  name="4" onChange={(e) => setMajorThird(!majorThird)} />
            </div>

            <div className="formFlex">
              <label for="5">Perfect Fourth</label>
              <input type="checkbox"  name="5" onChange={(e) => setPerfectFourth(!perfectFourth)} />
            </div>

            <div className="formFlex">
              <label for="6">Tritone</label>
              <input type="checkbox"  name="6" onChange={(e) => setTritone(!tritone)} />
            </div>

            <div className="formFlex">
              <label for="7">Perfect Fifth</label>
              <input type="checkbox"  name="7" onChange={(e) => setPerfectFifth(!perfectFifth)} />
            </div>

            <div className="formFlex">
              <label for="8">Minor Sixth</label>
              <input type="checkbox"  name="8" onChange={(e) => setMinorSixth(!minorSixth)} />
            </div>

            <div className="formFlex">
              <label for="9">Major Sixth</label>
              <input type="checkbox"  name="9" onChange={(e) => setMajorSixth(!majorSixth)} />
            </div>

            <div className="formFlex">
              <label for="10">Minor Seventh</label>
              <input type="checkbox"  name="10" onChange={(e) => setMinorSeventh(!minorSeventh)} />
            </div>

            <div className="formFlex">
              <label for="11">Major Seventh</label>
              <input type="checkbox"  name="11" onChange={(e) => setMajorSeventh(!majorSeventh)} />
            </div>

            <div className="formFlex">
              <label for="12">Octave</label>
              <input type="checkbox"  name="12" onChange={(e) => setOctave(!octave)} />
            </div>

            <br></br>

            <div className="formFlex direction">
              <label for="direction">Direction:</label>
              <select id="direction" name="direction" onChange={(e) => setDirection(e.target.value)}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>

            <br></br>

            <button type="submit">Create</button>  
            
            {/* DISPLAY MESSAGE MISSING FIELDS */}
          
          </form>

          </div>

          <div></div>
          <div></div>

    </div>
  );
}

export default CreateInterval;
