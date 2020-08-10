import React from "react";
import "./index.css";

import Title from "../Title";
import Separator from "../Separator";

function SkillsContentBlock({ children, className, title }) {
  return (
    <div className="skills-block">
      <h3 level="3">{title}</h3>
      <Separator className="my-4" />
      <ul className="skills-list"> 
        {children}
      </ul>
    </div>
  );
}

export default SkillsContentBlock;