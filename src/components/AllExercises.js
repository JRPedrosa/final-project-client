import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function AllExercises() {

    const [exercises, setExercises] = useState([]);
    const [scales, setScales] = useState([]);
    const [arpeggios, setArpeggios] = useState([]);
    
    const [deleteInterval, setDeleteInterval] = useState(false)

    useEffect(() => {
        async function getAllExercises() {
           const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/myexercises`, { withCredentials: true});
           setExercises(response.data);
        }
        getAllExercises();

        async function getAllScales() {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/scales`, { withCredentials: true});
            setScales(response.data);
        }
        getAllScales();

        async function getAllArpeggios() {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/arpeggios`, { withCredentials: true});
            setArpeggios(response.data);
        }
        getAllArpeggios();

    }, [deleteInterval])

    const handleDeleteExercise = async (id) => {
        await axios.delete(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/interval/${id}`
        );
        setDeleteInterval(!deleteInterval);
        
      };

      const handleDeleteScale = async (id) => {
        await axios.delete(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/scale/${id}`
        );
        setDeleteInterval(!deleteInterval);
        
      };

      const handleDeleteArpeggio = async (id) => {
        await axios.delete(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/arpeggio/${id}`
        );
        setDeleteInterval(!deleteInterval);
        
      };

    
  return (
      <div className="allBefore" >

                    <div className="all">

                            <div className="allTextExer">

                            <h1>Interval Exercises</h1>

                            <ul>
                                    {exercises.map((exercise) => {
                                        return <li className="linkFlex" key={exercise._id}>


                                            <NavLink className="allLinks" to={`/exercises/${exercise._id}`}>- {exercise.name}</NavLink>
                                            
                                            <button onClick={() => handleDeleteExercise(exercise._id)}>Delete</button>
                                            

                                        </li>
                                        
                                    })}
                                </ul>

                            </div>
                            <div></div>
                            <div></div>


                            <div className="allTextExer">

                            <h1>Arpeggios Exercises</h1>

                            <ul>
                                    {arpeggios.map((exercise) => {
                                        return <li className="linkFlex" key={exercise._id}>


                                            <NavLink className="allLinks" to={`/arpeggios/${exercise._id}`}>- {exercise.name}</NavLink>
                                            
                                            <button onClick={() => handleDeleteArpeggio(exercise._id)}>Delete</button>
                                            

                                        </li>
                                        
                                    })}
                                </ul>

                            </div>



                            <div></div>
                            <div></div>

                            <div className="allTextExer">

                                <h1>Scale Exercises</h1>

                                <ul>
                                    {scales.map((scale) => {
                                        return <li className="linkFlex" key={scale._id}>
                                            <NavLink className="allLinks"  to={`/scales/${scale._id}`}>- {scale.name}</NavLink>

                                            <button onClick={() => handleDeleteScale(scale._id)}>Delete</button>

                                            

                                        </li>
                                    })}
                                </ul>
                        </div>

                        

                    </div>

            <div></div>
            <div></div>
     </div>
  )
}

export default AllExercises;