import React from "react";
import CopyButton from "../components/CopyButton";
import "./apps.css";

function ActiveDirectory({ employee }) {
  const copyAD = `Fullname: ${employee.firstName} ${employee.lastName}\nEmail: ${employee.emailAdd}\nADID: ${employee.adid}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nAddress: ${employee.address}\nZip Code: ${employee.zipCode}\nCountry: ${employee.country}`;
  return (
    <div className="emp-task">
      <div className="ad-emp-details">
        {copyAD.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyAD.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div>
        <CopyButton text={copyAD} />
      </div>
    </div>
  );
}

export default ActiveDirectory;
