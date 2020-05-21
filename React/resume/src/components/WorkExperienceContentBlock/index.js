import React from "react";
import "./index.css";

function WorkExperience ({children, job, company, year, description, detalization1, detalization2}) {
    return (
        <div className="item">
            <div className="Work-experience-flex-box">
                <h4>{job}</h4>
                <h5>{company}</h5>
                <h5>{year}</h5>
            </div>
            <p>{description}</p>
            <ul className="Work-Experience-ul">
                <li className="Work-Experiance-li">{detalization1}</li>
                <li className="Work-Experiance-li">{detalization2}</li>
            </ul>
        </div>
    );
}

export default WorkExperience;