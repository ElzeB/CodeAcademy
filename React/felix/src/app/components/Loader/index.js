import React, { Component } from "react";
import LoderGif from "../../images/loader.gif";
import "./index.css";

class Loader extends Component {
    state = {}
 
    render() {
    return (
        <div className="loader-container">
            <div className="loader">
                <img src={LoderGif} />
            </div>
        </div>
    )
    }
}

export default Loader;