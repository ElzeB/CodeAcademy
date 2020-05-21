import React from "react";
import "./index.css";

function VerticalLine({level}) {
  const Tag = `style = {{left: ${level}%}}`;

    return <div className="VerticalLine" Tag></div>;
  }
  
  export default VerticalLine;