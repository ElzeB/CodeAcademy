import React, {useState} from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import PageLayout from "./routes/Home";
import PrivateRoute from "./components/PrivateRoute";
import Content from "./routes/Content";
import SingleMovieCardPage from "./routes/SingleMovieCardPage";

import "./App.css";

import store from "./state";

import SingleMovieCard from "./components/SingleMovieCard";

function App() {

  const [favorites, setFavorites] = useState([]);
  
  
  const getItemId = id => {
    console.log(id);
    
    if (favorites.includes(id)) {
      console.log(id);
      
      setFavorites(favorites.filter(el => el !==id) );
    } else {
      setFavorites(favorites.concat(id));
    }
  }
console.log(favorites);

  return (
    <Provider store={store}>
    <Router>
        <Switch>
          <Route exact path="/">
           <PageLayout favorites={favorites} getItemId={getItemId}/>
           </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/content">
            <Content favorites={favorites} getItemId={getItemId} />
          </PrivateRoute>
          <PrivateRoute exact path="/content/items/id">
            <SingleMovieCardPage />
          </PrivateRoute>
          <Route path="*">
            <div>404 Page not found</div>
          </Route>
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;




