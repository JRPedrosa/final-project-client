import React from "react";
import { NavLink } from "react-router-dom";



function Home({loggedInUser}) {
    
  return   loggedInUser ? ( 
  
  <div className="home">


            {/* <div> */}

            <NavLink className="homeLinks" id="myExercises"  activeStyle={{ color: "red" }} exact to="/exercises">My Exercises</NavLink>

            {/* </div> */}

            
          <div>
          <NavLink className="homeLinks"  activeStyle={{ color: "red" }} exact to="/create-interval">Custom Intervals Exercise</NavLink>

            <NavLink className="homeLinks"  activeStyle={{ color: "red" }} exact to="/create-arpeggio">Custom Arpeggios Exercise</NavLink>
          
            <NavLink className="homeLinks"  activeStyle={{ color: "red" }} exact to="/create-scales">Custom Scales Exercise</NavLink>
            
          </div>
            
          
          
</div>
        ) : ( 
        
        <div className="homeNot">
          
          <div className="homeNotText">
            <h3>Ear Perfect</h3>

            <h4>The best solution for any seasoned or aspiring musician to practice ear training. </h4>

            <p>Choose any of the exercises on top or <a href="/login">login</a> to create your own custom drills</p>

          
          </div>

         
          


        </div>
         
         
         )







      {/* <img id="homeImg" src="/pexels-freestocksorg-14548.jpg"/> */}



     
  
}

export default Home;