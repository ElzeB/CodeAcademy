import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import PageLayout from "./routes/Home";
import Home from "./routes/Home";
import PrivateRoute from "./components/PrivateRoute";
import Content from "./routes/Content";

import "./App.css";

function App() {
  return (
    <Router>
   
        <Switch>
          <Route exact path="/">
           <PageLayout />
           </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/content">
            <Content />
          </PrivateRoute>
          <Route path="*">
            <div>404 Page not found</div>
          </Route>
        </Switch>
   
    </Router>
  );
}

export default App;




