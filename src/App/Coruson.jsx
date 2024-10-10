import React from "react";

function Coruson({ employee }) {
  return (
    <div className="emp-task">
      <p>Hi Jaya,</p>
      <p>
        For your kind assistance please on the creation of Coruson Profile for
        below new joiner:{" "}
      </p>
      <p>Forename: {employee.firstName} </p>
      <p>Lastname: {employee.lastName} </p>
      <p>Email Address: {employee.emailAdd} </p>
      <p>Department: {employee.department} </p>
      <p>OKTA ID: {employee.adid} </p>
      <p>Country: {employee.country} </p>
    </div>
  );
}

export default Coruson;
