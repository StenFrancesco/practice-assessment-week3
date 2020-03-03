import React, { useState, useEffect } from 'react';
import './App.css';
import Appointment from './components/Appointment';
import axios from 'axios'

function DutyPage() {

  const statusText = [
    {
      status: "Ready."
    },
    {
      status: "Loading doctors list......"
    },
    {
      status: "List of all available doctors loaded."
    }
  ]

  const [searchState, set_searchState] = useState(statusText[0].status)
  const [data, set_data] = useState([])

  useEffect(() => {

    const listDoctors = async () => {

      set_searchState(statusText[1].status)

      const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors")

      set_data(response.data)
      set_searchState(statusText[2].status);

    }
    listDoctors();
  }, []);

  return (
    <div>
      <h1>Who is on duty?</h1>

      <Appointment />

      <table align="center">
        <tbody>
          <tr>
            <td>Doctor</td>
            <td>Availability</td>
          </tr>
          {data.map(doctorslist => <tr key={doctorslist.id}><td>{doctorslist.doctor}</td>{doctorslist.onDuty ? <td>On Duty</td> : <td>Not on Duty</td>}</tr>)}
        </tbody>
      </table>
      <p>{searchState}</p>
    </div>

  );
}

export default DutyPage;
