import React from "react";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";
function Coruson({ employee }) {
  const copyCoruson = `Hi Jaya,\nFor your kind assistance please on the creation of Coruson profile for below new joiner: \n\nForename: ${employee.firstName}\nLastname: ${employee.lastName}\nEmail Address: ${employee.emailAdd}\nDepartment: ${employee.department}\nOKTAID: ${employee.adid}\nCountry: ${employee.country}\n\nThank you!`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <div className="emp-task">
      <div className="emp-details">
        {copyCoruson.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyCoruson.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button onClick={() => copyToClipboard(copyCoruson)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default Coruson;
