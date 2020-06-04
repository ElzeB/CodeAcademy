import React from "react";
import "./index.css";

function SmallButton({title, onClick, className}) {
  return <button className={className} onClick={onClick}>{title}</button>
}

export default SmallButton;