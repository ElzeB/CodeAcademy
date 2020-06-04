import React from "react";
import "./index.css";
import BigButton from "../BigButton";

function Hero() {
  return (
    <div className="hero-container">
      <div className="header-body">
        <div className="center-content">
          <div className="title">Wanna more Content ?</div>
          <BigButton title="Get Access"></BigButton>
        </div>
      </div>

      <div className="separator"></div>
    </div>
  );
}

export default Hero;