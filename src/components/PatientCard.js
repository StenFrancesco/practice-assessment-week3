import React from 'react'


export default function PatientCard(props) {

  const { firstName, lastName, id, dateOfBirth, email, phoneNumber, gender, prescriptions } = props;

  return (
    <div>
      <hr />
      <p>Name: {firstName} {lastName}</p>
      <p>ID: {id}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <p>E-mail: {email}</p>
      <p>Phonenumber: {phoneNumber}</p>
      <p>Gender: {gender}</p>
      <p>Prescriptions: {prescriptions}</p>
      <button>Show details</button>
    </div>
  )

}