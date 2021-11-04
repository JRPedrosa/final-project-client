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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Arpeggio from './components/Arpeggios';
import CreateArpeggio from './components/createArpeggio';
import OneExerciseArpeggio from './components/OneExerciseArpeggio';






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

  const piano = [
    "../2489__jobro__piano-ff/39172__jobro__piano-ff-025.wav",
    "../2489__jobro__piano-ff/39173__jobro__piano-ff-026.wav",
    "../2489__jobro__piano-ff/39174__jobro__piano-ff-027.wav",
    "../2489__jobro__piano-ff/39175__jobro__piano-ff-028.wav",
    "../2489__jobro__piano-ff/39176__jobro__piano-ff-029.wav",
    "../2489__jobro__piano-ff/39177__jobro__piano-ff-030.wav",
    "../2489__jobro__piano-ff/39178__jobro__piano-ff-031.wav",
    "../2489__jobro__piano-ff/39179__jobro__piano-ff-032.wav",
    "../2489__jobro__piano-ff/39180__jobro__piano-ff-033.wav",
    "../2489__jobro__piano-ff/39181__jobro__piano-ff-034.wav",
    "../2489__jobro__piano-ff/39182__jobro__piano-ff-035.wav",
    "../2489__jobro__piano-ff/39183__jobro__piano-ff-036.wav",
    "../2489__jobro__piano-ff/39184__jobro__piano-ff-037.wav",
    "../2489__jobro__piano-ff/39185__jobro__piano-ff-038.wav",
    "../2489__jobro__piano-ff/39186__jobro__piano-ff-039.wav",
    "../2489__jobro__piano-ff/39187__jobro__piano-ff-040.wav",
    "../2489__jobro__piano-ff/39188__jobro__piano-ff-041.wav",
    "../2489__jobro__piano-ff/39189__jobro__piano-ff-042.wav",
    "../2489__jobro__piano-ff/39190__jobro__piano-ff-043.wav",
    "../2489__jobro__piano-ff/39191__jobro__piano-ff-044.wav",
    "../2489__jobro__piano-ff/39193__jobro__piano-ff-045.wav",
    "../2489__jobro__piano-ff/39194__jobro__piano-ff-046.wav",
    "../2489__jobro__piano-ff/39195__jobro__piano-ff-047.wav",
    "../2489__jobro__piano-ff/39196__jobro__piano-ff-048.wav",
    "../2489__jobro__piano-ff/39197__jobro__piano-ff-049.wav",
    "../2489__jobro__piano-ff/39198__jobro__piano-ff-050.wav",
    "../2489__jobro__piano-ff/39199__jobro__piano-ff-051.wav",
    "../2489__jobro__piano-ff/39200__jobro__piano-ff-052.wav",
    "../2489__jobro__piano-ff/39201__jobro__piano-ff-053.wav",
    "../2489__jobro__piano-ff/39202__jobro__piano-ff-054.wav",
    "../2489__jobro__piano-ff/39203__jobro__piano-ff-055.wav",
    "../2489__jobro__piano-ff/39204__jobro__piano-ff-056.wav",
    "../2489__jobro__piano-ff/39205__jobro__piano-ff-057.wav",
    "../2489__jobro__piano-ff/39206__jobro__piano-ff-058.wav",
    "../2489__jobro__piano-ff/39207__jobro__piano-ff-059.wav",
    "../2489__jobro__piano-ff/39208__jobro__piano-ff-060.wav",
    "../2489__jobro__piano-ff/39209__jobro__piano-ff-061.wav",
  ];



  return (
    <div className="App">

      <ToastContainer />

      <LoggedUserProvider value={loggedInUser}>

      <NavBar  loggedInUser={loggedInUser} setCurrentLoggedInUser={setCurrentLoggedInUser} />

      <Switch>
        <Route exact path={"/"} 
        render={() => {
          return <Home loggedInUser={loggedInUser} />
        }} />
        

         {/* component={Home} />     */}
        <Route 
          exact path={"/interval"}
          render={() => {
            return <Interval piano={piano} />
          }} />
        <PrivateRoute 
          exact path={"/exercises/:id"} 
          render={() => {
            return <OneExercise piano={piano} />
          }} />
        <Route 
          exact path={"/scale"} 
          render={() => {
            return <Scale piano={piano} />
          }} />
        <PrivateRoute exact path={"/scales/:id"} component={OneExerciseScale} />
        <Route 
          exact path={"/arpeggio"} 
          render={() => {
            return <Arpeggio piano={piano} />
          }} />
        <PrivateRoute exact path={"/arpeggios/:id"} component={OneExerciseArpeggio} />
        <PrivateRoute exact path={"/create-interval"} component={CreateInterval} />
        <PrivateRoute exact path={"/create-scales"} component={CreateScale} />
        <PrivateRoute exact path={"/create-arpeggio"} component={CreateArpeggio} />
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
