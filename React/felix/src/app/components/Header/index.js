import React from "react";
import { Link } from "react-router-dom";
import BigButton from "../BigButton";
import "./index.css";

function Header() {
  
    return (
      <div className="header-container">
        <div className="header-top">
          <svg
            className="Logo"
            viewBox="0 0 18 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 33V1H17V6.26582H7V14.3671H14.6V19.6329H7V33H1Z"
              fill="#D22F27"
              stroke="#D22F27"
            />
          </svg>
          
          <Link to="/login"><BigButton title="Sign In"></BigButton></Link>

        </div>
      </div>
    );
  }

export default Header;
