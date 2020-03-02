import React from 'react';
import './App.css';
import Appointment from './components/Appointment'
import DutyPage from './DutyPage';
import PatientSignUp from './PatientSignUp';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <Appointment />
      <p>
        <Link to="/dutypage">
          <button type="button">Who is on duty?</button>
        </Link>
      </p>
      <p>
        <Link to="/patientsignup">
          <button onClick={PatientSignUp}>I am a new patient</button>
        </Link>
      </p>
    </div>
  );
}

export default HomePage;
