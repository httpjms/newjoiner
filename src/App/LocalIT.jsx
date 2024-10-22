import React from "react";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

function LocalIT({ employee }) {
  const copyLocalIT = `Display Name: ${employee.firstName} ${employee.lastName}\nEmail Address: ${employee.emailAdd}\nADID: ${employee.adid}\nPassword: ${employee.password} `;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <div className="emp-task">
      <div className="emp-details">
        {copyLocalIT.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyLocalIT.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button onClick={() => copyToClipboard(copyLocalIT)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default LocalIT;
