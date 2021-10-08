import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoggedUserConsumer } from "../context/loggedUser";
import { toast } from "react-toastify";

function CreateArpeggio() {
  const [name, setName] = useState("");
  const history = useHistory();
  
  const [maj, setMaj] = useState(false);
  const [maj1, setMaj1] = useState(false);
  const [maj2, setMaj2] = useState(false);
  const [min, setMin] = useState(false);
  const [min1, setMin1] = useState(false);
  const [min2, setMin2] = useState(false);
  const [dim, setDim] = useState(false);
  const [dim1, setDim1] = useState(false);
  const [dim2, setDim2] = useState(false);


const loggedInUser = useContext(LoggedUserConsumer)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const possibleScales = [];

    if (maj) {
        possibleScales.push([4, 7]);  //[2, 4, 5, 7, 9, 11, 12]
    }

    if (maj1) {
        possibleScales.push([3, 8]);  //[2, 3, 5, 7, 8, 10, 12]
    }

    if (maj2) {
        possibleScales.push([5, 9]);  //[2, 3, 5, 7, 9, 10, 12]
    }
    if (min) {
        possibleScales.push([3, 7]);  //[1, 3, 5, 7, 8, 10, 12]
    }
    if (min1) {
        possibleScales.push([4, 9]);  //[2, 4, 6, 7, 9, 11, 12]
    }
    if (min2) {
        possibleScales.push([5, 8]);  //[2, 4, 5, 7, 9, 10, 12]
    }
    if (dim) {
        possibleScales.push([3, 6]);  //[1, 3, 5, 6, 8, 10, 12]
    }
    if (dim1) {
      possibleScales.push([3, 9]);
    }
    if (dim2) {
      possibleScales.push([6, 9]);
    }

    console.log(possibleScales);
    

    const body = {
      name,
      possibleScales,
      user: loggedInUser,
    };

    try {
      
      const response = await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/create-arpeggio`, body,  {withCredentials: true});

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
                  <label for="0">Major Root</label>
                  <input
                    type="checkbox"
                    name="0"
                    value="check"
                    onChange={(e) => setMaj(!maj)}
                  />
                  </div>

                <div className="formFlex">

                  <label for="1">Major 1º Inv.</label>
                  <input
                    type="checkbox"
                    name="1"
                    onChange={(e) => setMaj1(!maj1)}
                  />
                  </div>


                <div className="formFlex">

                  <label for="2">Major 2º Inv.</label>
                  <input
                    type="checkbox"
                    name="2"
                    onChange={(e) => setMaj2(!maj2)}
                  />
                  </div>

                <div className="formFlex">

                  <label for="3">Minor Root</label>
                  <input type="checkbox"  name="3" onChange={(e) => setMin(!min)} />
                  </div>

                <div className="formFlex">

                  <label for="4">Minor 1º Inv.</label>
                  <input type="checkbox"  name="4" onChange={(e) => setMin1(!min1)} />
                  </div>

                <div className="formFlex">

                  <label for="5">Minor 2º Inv.</label>
                  <input type="checkbox"  name="5" onChange={(e) => setMin2(!min2)} />
                  </div>

                <div className="formFlex">

                  <label for="6">Diminished Root</label>
                  <input type="checkbox"  name="6" onChange={(e) => setDim(!dim)} />
                  </div>

                <div className="formFlex">

                  <label for="7">Diminished 1º Inv.</label>
                  <input type="checkbox"  name="7" onChange={(e) => setDim1(!dim1)} />
                  </div>

                <div className="formFlex">

                  <label for="8">Diminished 2º Inv.</label>
                  <input type="checkbox"  name="8" onChange={(e) => setDim2(!dim2)} />
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

export default CreateArpeggio;