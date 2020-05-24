import React from "react";
import "./index.css";

function BlackBoxTitle({ children, level }) {
  
    return <div className="BlackBoxTitle" style={{"margin-top": `${level}px`}}> {children} </div>
    
  }
  
  export default BlackBoxTitle;