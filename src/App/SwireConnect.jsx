import React from "react";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

function SwireConnect({ employee }) {
  const copySC = `Hi,\n\nPlease may we ask if PPF documents of ${employee.firstName} ${employee.lastName} has been submitted to People Operations Mailbox?\n\nHi People Operations Team,\n\nPlease assist in creating the SC profile for the below new joiner once PPF documents are received\n\nName: ${employee.firstName} ${employee.lastName}\nadid: ${employee.adid}\nemail: ${employee.emailAdd}\n\nThank you.`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <div className="emp-task">
      <div className="emp-details">
        {copySC.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copySC.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button onClick={() => copyToClipboard(copySC)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default SwireConnect;
