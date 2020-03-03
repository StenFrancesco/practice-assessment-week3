import React from 'react';
import './App.css';
import PatientCard from './components/PatientCard'

function PatientDatabase() {
  return (
    <div>
      <h1>Patient Database</h1>
      <form>
        Doctor:
        <select>
          <option value="x" name="Doctor X">Doctor X</option>
          <option value="y" name="Doctor Y">Doctor Y</option>
        </select>
      </form>
      <PatientCard />

    </div>
  );
}

export default PatientDatabase;
