import React from "react";
import { connect } from "react-redux";
import "./index.css";

function SmallButton({
  title,
  className,
  onClick
}) {

  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
}

export default SmallButton;
