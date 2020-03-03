import React, { useState, useEffect } from 'react';
import './App.css';
import Appointment from './components/Appointment';
import axios from 'axios'

function DutyPage() {

  const [data, set_data] = useState([])

  useEffect(() => {

    const search = async () => {

      const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors")
      console.log("response", response.data);
      set_data(response.data)

    }
    search();
  }, []);





  return (
    <div>
      <h1>Who is on duty?</h1>

      <Appointment />

      <table align="center">
        <tr>
          <td>Doctor</td>
          <td>Availability</td>
        </tr>
        {data.map(doctorslist => <tr><td>{doctorslist.doctor}</td>{doctorslist.onDuty ? <td>On Duty</td> : <td>Not on Duty</td>}</tr>)}
      </table>
    </div>




  );
}

export default DutyPage;
