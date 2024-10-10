import React from "react";

function SDP({ employee }) {
  return (
    <div className="emp-task">
      <p>For enabling po ng SDP, thank you.</p>
      <p>
        Display Name: {employee.firsName} {employee.lastName}
      </p>
      <p>Email: {employee.emailAdd} </p>
      <p>Job Title: {employee.jobTitle} </p>
      <p>Department: {employee.department} </p>
      <p>Manager: {employee.manager} </p>
      <p>Country: {employee.country} </p>
      <p>Zendesk: Created </p>
    </div>
  );
}

export default SDP;
