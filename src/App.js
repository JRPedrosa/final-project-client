import './App.css';
import Home from './components/Home';
import Interval from './components/Interval';
import { Switch, Route } from "react-router"
import NavBar from './components/NavBar';
import CreateInterval from './components/createInterval';
import Scale from './components/Scale';
import Signup from './components/Signup';
import Login from './components/login';
import { useState, useEffect } from "react";
import axios from "axios";
import AllExercises from './components/AllExercises';
import OneExercise from './components/OneExercise';
import CreateScale from './components/createScale';
import OneExerciseScale from './components/OneExerciseScale';
import { LoggedUserProvider } from "./context/loggedUser";
import PrivateRoute from "./components/PrivateRoute";





function App() {

  const [loggedInUser, setCurrentLoggedInUser] = useState("");

  useEffect(() => {
    async function checkLoggedIn() {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/isLoggedIn`, { withCredentials: true});
      if (response.data.username) {
        setCurrentLoggedInUser(response.data);
      }
    }
    checkLoggedIn();
  }, [])



  return (
    <div className="App">

      <LoggedUserProvider value={loggedInUser}>

      <NavBar  loggedInUser={loggedInUser} setCurrentLoggedInUser={setCurrentLoggedInUser} />

      <Switch>
        <Route exact path={"/"} 
        render={() => {
          return <Home loggedInUser={loggedInUser} />
        }} />
        

         {/* component={Home} />     */}
        <Route exact path={"/interval"} component={Interval} />
        <PrivateRoute exact path={"/exercises/:id"} component={OneExercise} />
        <Route exact path={"/scale"} component={Scale} />
        <PrivateRoute exact path={"/scales/:id"} component={OneExerciseScale} />
        <PrivateRoute exact path={"/create-interval"} component={CreateInterval} />
        <PrivateRoute exact path={"/create-scales"} component={CreateScale} />
        <PrivateRoute path="/exercises" component={AllExercises} />
        <Route path="/signup" component={Signup} />
        <Route 
          path="/login" 
          render={() => {
          return <Login setCurrentLoggedInUser={setCurrentLoggedInUser} />
        }} />
      </Switch>   
           
      </LoggedUserProvider>
       
    </div>
  );
}

export default App;
