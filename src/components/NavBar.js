import React from 'react';
import '../App.css';
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink to='/home' activeClassName="selected" activeStyle={{
          fontWeight: "bold",
          color: "white"
        }}>
          <li>Home</li>
        </NavLink>
        <NavLink to='/dutypage' activeClassName="selected" activeStyle={{
          fontWeight: "bold",
          color: "white"
        }}>
          <li>Doctor Schedule</li>
        </NavLink>
        <NavLink to='/patientsignup' activeClassName="selected" activeStyle={{
          fontWeight: "bold",
          color: "white"
        }}>
          <li>Patient Signup</li>
        </NavLink>
        <NavLink to='/patientdatabase' activeClassName="selected" activeStyle={{
          fontWeight: "bold",
          color: "white"
        }}>
          <li>Patient Database</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
