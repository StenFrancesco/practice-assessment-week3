import React from 'react'
import '../App.css'

function Appointment() {

  const checkOpenStatus = function () {

    let date = new Date();
    let hours = date.getHours();
    let day = date.getDay();
    let min = date.getMinutes();

    const openclosed = ((hours > 8) && (hours < 17) && (day != 0)) ? "We are open" : "We are closed";

    console.log(openclosed)

    setTimeout(checkOpenStatus, 15000);

  };

  checkOpenStatus();

  return (
    <div>
      <p>{}</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  )
}

export default Appointment;
