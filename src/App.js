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
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/dutypage" component={DutyPage} />
          <Route path="/patientsignup" component={PatientSignUp} />
          <Route path="/patientdatabase" component={PatientDatabase} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
