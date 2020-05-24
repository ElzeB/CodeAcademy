import React from "react";
import "./index.css";

function VerticalLine({level}) {

    return <div className="VerticalLine" style={{left:`${level}%`}}></div>;
  }
  
  export default VerticalLine;