import React from "react";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

function K2({ employee }) {
  const copyK2 = `Hi K2 IT Digital Team,\n\nFor your kind assistance please on creating K2 profile for below user:\nDisplay Name: ${employee.firstName} ${employee.lastName}\nADID: ${employee.adid}\nCopy user:`;
  const { copyToClipboard, isVisible } = useClipboard();

  return (
    <div className="emp-task">
      <div className="emp-details">
        {copyK2.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyK2.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button onClick={() => copyToClipboard(copyK2)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default K2;
