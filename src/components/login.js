import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const body = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
        body,
        { withCredentials: true}
      );
      if (response.data.username) {
        toast.success("Login success");
        props.setCurrentLoggedInUser(response.data); //Comes from the app component
        history.push("/");
      }
    } catch (e) {
      toast.error("Invalid login");
    }
  };




  return (
    <div className="homeNot">

      <div className="login">

        <h2>Login</h2>

          <form onSubmit={handleFormSubmit}>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button type="submit">Login</button>
          </form>

          <p>Don't have an account? Sign up <NavLink className="loginLink" to="/signup">here</NavLink> </p>

      </div>
      <div></div>

      

    </div>
  );
}

export default Login;