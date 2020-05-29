import React from "react";
import "./index.css";

function SelectLanguage({ onChange }) {
  return (
    <select onChange={onChange}>
      <option value="lt">Lietuviškai</option>
      <option value="en">English</option>
    </select>
  );
}

export default SelectLanguage;
