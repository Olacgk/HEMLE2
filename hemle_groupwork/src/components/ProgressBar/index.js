import React from "react";

const ProgressBar = ({ bgcolor, completed, clickRef, checkWidth, ...props }) => {
    
  
    const containerStyles = {
      height: 5,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      minWidth: '100%',
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      width: `${completed}%`,
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }

  
    return (
      <div className={props.className} style={containerStyles}>
        <div style={fillerStyles} ref={clickRef} onClick={checkWidth}>
          <span style={labelStyles}></span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;