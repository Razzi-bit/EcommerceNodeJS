// react imports
import React from "react";

// eigen files
import "./LoadingSpinner.css";

// Component die loadingSpinner laat zien
const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
