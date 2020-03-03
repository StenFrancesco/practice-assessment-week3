import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function PatientSignUp() {

  const { register, handleSubmit } = useForm();

  const onSubmit = submitted_data => {
    console.log(submitted_data)
    alert("Your data has been entered into the system");
  }

  return (
    <div>
      <h1>Patient Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>first name: </label>
          <input ref={register} type="text" name="firstName"></input>
        </p>
        <p>
          <label>last name: </label>
          <input ref={register} type="text" name="lastName"></input>
        </p>
        <p>
          <label>e-mail: </label>
          <input ref={register} type="text" name="e-mail"></input>
        </p>
        <p>
          <label>phone: </label>
          <input ref={register} type="text" name="phone"></input>
        </p>
        <p>
          <label>gender: </label>
          <select id="gender" ref={register} name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </p>
        <p>
          <label>date of birth: </label>
          <input ref={register} type="date" name="birthdate"></input>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PatientSignUp;
