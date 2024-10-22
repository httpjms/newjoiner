import React from "react";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

function SDP({ employee }) {
  const copySDP = `For enabling po ng SDP, thank you!\n\nDisplay Name: ${employee.firstName} ${employee.lastName}\nEmail: ${employee.emailAdd}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nCountry: ${employee.country}\nZendesk: Created`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <div className="emp-task">
      <div className="emp-details">
        {copySDP.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copySDP.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button onClick={() => copyToClipboard(copySDP)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default SDP;
