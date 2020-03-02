import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import PatientSignUp from './PatientSignUp'
import DutyPage from './DutyPage'
import PatientDatabase from './PatientDatabase'
import HomePage from './HomePage'
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/home" exact={true} component={HomePage} />
          <Route path="/dutypage" exact={true} component={DutyPage} />
          <Route path="/patientsignup" exact={true} component={PatientSignUp} />
          <Route path="/patientdatabase" exact={true} component={PatientDatabase} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
