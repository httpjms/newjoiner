import React from "react";

function ActiveDirectory({ employee }) {
  return (
    <div className="emp-task">
      <p>
        Full Name: {employee.firstName} {employee.lastName}
      </p>
      <p>Email: {employee.emailAdd}</p>
      <p>ADID: {employee.adid}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Department: {employee.department}</p>
      <p>Manager: {employee.manager}</p>
      <p>Address: {employee.address}</p>
      <p>Zip Code: {employee.zipCode}</p>
      <p>Country: {employee.country} </p>
    </div>
  );
}

export default ActiveDirectory;
