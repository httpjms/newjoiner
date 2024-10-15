// CopyButton.js
import React from "react";
import { copyToClipboard } from "../Utils/CopyToClipboard";

const CopyButton = ({ text }) => {
  const handleCopy = () => {
    copyToClipboard(text);
  };

  return <button onClick={handleCopy}>Copy</button>;
};

export default CopyButton;
