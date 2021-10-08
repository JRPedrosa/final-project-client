import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

  return loggedInUser ? (
    <>
      
      {/* <p>Welcome {loggedInUser.username}</p> */}
      <nav>
        <ul>
          <li>
            <NavLink className="navLinks earPerfect"  exact to="/">
              Ear Perfect
            </NavLink>
          </li>
          <li>
            <NavLink  className="navLinks" activeStyle={{ color: "red" }} exact to="/interval">
              Intervals
            </NavLink>
          </li>

          <li>
          <NavLink  className="navLinks" activeStyle={{ color: "red" }} exact to="/arpeggio">
            Arpeggios
          </NavLink>
        </li>
        
          <li>
            <NavLink  className="navLinks" activeStyle={{ color: "red" }} exact to="/scale">
              Scales
            </NavLink>
          </li>


          
           <div className="navSign">
           
            <li>
              <p>Welcome <span>{loggedInUser.username}</span></p>
            </li>
            <li>
              <NavLink className="navLinks" exact to="/">
                <button onClick={logoutUser}>Logout</button>
              </NavLink>
            </li>
            
          </div>
        </ul>
      </nav>
    </>
  ) : (
    <nav>
      <ul>
        <li>
          <NavLink  className="navLinks earPerfect"  exact to="/">
            Ear Perfect
          </NavLink>
        </li>

        <li>
          <NavLink  className="navLinks" activeStyle={{ color: "red" }} exact to="/interval">
            Intervals
          </NavLink>
        </li>

        <li>
          <NavLink  className="navLinks" activeStyle={{ color: "red" }} exact to="/arpeggio">
            Arpeggios
          </NavLink>
        </li>


        <li>
          <NavLink  className="navLinks" activeStyle={{ color: "red" }} exact to="/scale">
            Scales
          </NavLink>
        </li>
        <div className="navLogin">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
          <li>
            <NavLink className="navLinks"  activeStyle={{ color: "red" }} to="/signup">
              Sign up
            </NavLink>
          </li>
            <p>/</p>
          <li>
            <NavLink className="navLinks"  activeStyle={{ color: "red" }} to="/login">
               Login
            </NavLink>
          </li>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
