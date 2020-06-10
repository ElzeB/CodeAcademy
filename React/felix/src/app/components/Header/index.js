import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import BigButton from "../BigButton";
import "./index.css";

const Header = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (token !== !!window.localStorage.getItem('token')) {
      setToken(!!window.localStorage.getItem('token'));
    }
  }, []);

  const Logout = async () => {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com//auth/logout',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          token: window.localStorage.getItem('token'),
        }),
       });
    if (!response.ok) throw response;
    localStorage.removeItem('token');
  }
  
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
          <Switch>
            <Route exact path = "/content">
              <Link to="/"><BigButton title="Log out" onClick={Logout}></BigButton></Link>
            </Route>
            <Route path = "*">
              <Link to="/login"><BigButton title="Sign In"></BigButton></Link>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }

export default Header;
