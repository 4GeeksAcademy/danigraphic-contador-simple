import React from "react";

const SecondsCounter = (props) => {
  const seconds = props.seconds.toString().padStart(6, "0"); 

  const boxStyle = {
    backgroundColor: "#000000",          
    color: "white",                      
    borderRadius: "10px",                
    margin: "5px",
    padding: "20px",
    fontSize: "50px",
    minWidth: "70px",
    textAlign: "center",
    boxShadow: "0 0 10px 2px rgba(128,128,128,0.3)" 
  };

  return (
    <div className="container-fluid bg-dark text-white p-4 d-flex justify-content-center">
      <div className="d-flex">
        <div style={boxStyle}>
          <i className="far fa-clock"></i>
        </div>
        <div style={boxStyle}>{seconds[0]}</div>
        <div style={boxStyle}>{seconds[1]}</div>
        <div style={boxStyle}>{seconds[2]}</div>
        <div style={boxStyle}>{seconds[3]}</div>
        <div style={boxStyle}>{seconds[4]}</div>
        <div style={boxStyle}>{seconds[5]}</div>
      </div>
    </div>
  );
};

export default SecondsCounter;