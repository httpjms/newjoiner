import React from "react";

function Zendesk({ employee }) {
  return (
    <div>
      <p>For enabling po ng Zendesk, thank you!</p>
      <p>
        Display Name: {employee.firstName} {employee.lastName}{" "}
      </p>
      <p>Email Address: {employee.emailAdd}</p>
    </div>
  );
}

export default Zendesk;
