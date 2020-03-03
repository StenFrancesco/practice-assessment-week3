import React from 'react'
import '../App.css'


function Appointment() {

  let date = new Date();
  let hours = date.getHours();
  let day = date.getDay();
  const openclosed = ((hours > 8) && (hours < 17) && (day != 0)) ? "We are open." : "We are closed.";



  return (
    <div>
      <p>{openclosed}</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  )
}

export default Appointment;
