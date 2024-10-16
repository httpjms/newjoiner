import React from "react";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

function Zendesk({ employee }) {
  const copyZendesk = `For Enabling po ng Zendesk. thank you! \n\nDisplay Name: ${employee.firstName} ${employee.lastName}\nEmail Address: ${employee.emailAdd}`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <div className="emp-task">
      <div className="emp-details">
        {copyZendesk.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyZendesk.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div>
        <button onClick={() => copyToClipboard(copyZendesk)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default Zendesk;
