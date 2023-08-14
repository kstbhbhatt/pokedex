import React from "react";
import "./backButton.css";

function BackButton({ onClick }) {
  return <div className="back-button" onClick={() => onClick()}></div>;
}
export default BackButton;
