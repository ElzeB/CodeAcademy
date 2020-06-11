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
  
  
  const getItemId = movieId => {
    console.log(movieId);
    
    if (favorites.includes(movieId)) {
      console.log(movieId);
      
      setFavorites(favorites.filter(el => el !==movieId) );
    } else {
      setFavorites(favorites.concat(movieId));
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
          <Route exact path="/content/:movieId">
            <SingleMovieCardPage />
          </Route>
          <Route path="*">
            <div>404 Page not found</div>
          </Route>
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;




