import React from "react";
import "./loader.css";

function Loader({ showLoader = false }) {
  if (!showLoader) return "";
  return (
    <div className="loader">
      <div className="pokeball-loader">
        <div className="dash"></div>
      </div>
    </div>
  );
}
export default Loader;
