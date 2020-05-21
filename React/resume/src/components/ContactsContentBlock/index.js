import React from "react";
import "./index.css";

import BlackBoxTitle from "../BlackBoxTitle";

function Contacts ({children, contactType, details, detalization1, detalization2}) {
    return (
       
            <div className="Contacts-flex-box">
                <BlackBoxTitle>{contactType}</BlackBoxTitle>
                <ul className="Contacts-ul">
                    <a href=""><li className="Contacts-li">{detalization1}</li></a>
                    <a href=""><li className="Contacts-li">{detalization2}</li></a>
                </ul> 
            </div>
    );
}

export default Contacts;