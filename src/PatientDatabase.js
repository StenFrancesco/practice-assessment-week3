import React, { useState, useEffect } from 'react';
import './App.css';
import PatientCard from './components/PatientCard'
import axios from 'axios';

function PatientDatabase() {

  const [data, set_data] = useState([])
  const sortedPatients = [...data].sort((patientA, patientB) => patientA.lastName.localeCompare(patientB.lastName))
  // console.log(sortedPatients)

  const coventryPatients = sortedPatients.filter(function (patient) {
    if (patient.doctorId === 1) {
      return true
    } else {
      return false
    }
  })
  // console.log(coventryPatients)

  const adenetPatients = sortedPatients.filter(function (patient) {
    if (patient.doctorId === 2) {
      return true
    } else {
      return false
    }
  })
  // console.log(adenetPatients)

  const tolladyPatients = sortedPatients.filter(function (patient) {
    if (patient.doctorId === 3) {
      return true
    } else {
      return false
    }
  })
  // console.log(tolladyPatients)

  useEffect(() => {

    const listPatients = async () => {

      const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients")
      // console.log("response", response.data);
      set_data(response.data)
    }
    listPatients();



  }, []);

  const [doctorData, set_doctorData] = useState([])

  useEffect(() => {

    const listDoctors = async () => {

      const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors")
      // console.log("response", response.data);
      set_doctorData(response.data)

    }
    listDoctors();
  }, []);

  const [sort_by, set_sort_by] = useState([])
  const change_sorting = event => {
    set_sort_by(event.target.value)
    if (sort_by === 1) {
      set_data(coventryPatients)
    } else if (sort_by === 2) {
      set_data(adenetPatients)
    } else {
      set_data(tolladyPatients)
    }
  }


  return (
    <div>
      <h1>Patient Database</h1>
      <form>
        Doctor:
        <select onChange={change_sorting}>
          {doctorData.map(doctorslist => <option key={doctorslist.id} value={doctorslist.id}>{doctorslist.doctor}</option>)}
        </select>
      </form>
      {sortedPatients.map(patients => {
        return (
          <PatientCard
            key={patients.id}
            firstName={patients.firstName}
            lastName={patients.lastName}
            id={patients.id}
            dateOfBirth={patients.dateOfBirth}
            email={patients.email}
            phoneNumber={patients.phoneNumber}
            gender={patients.gender}
            prescriptions={patients.prescriptions}
          />
        )
      })}
    </div >
  );
}

export default PatientDatabase;
