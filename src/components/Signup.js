import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signup`, body);
    toast.success("Account created");
    history.push("/");
  };

  return (
    <div className="homeNot">

      <div className="login">

        <h2>Sign up</h2>
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

            <button type="submit">Sign up</button>
          </form>

          <p>Already have an account? Login <NavLink className="loginLink" to="/login">here</NavLink> </p>

      </div>

      <div></div>
      
    </div>
  );
}

export default Signup;