import React from "react";
import './style.css'

const ProgressBar = ({ completed, clickRef, checkWidth }) => {

  
    return (
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${completed+"%"}`}}></div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;