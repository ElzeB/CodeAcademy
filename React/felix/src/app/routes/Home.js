import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoovieCardContainer from "../components/MoovieCardContainer";
import Footer from "../components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

componentDidMount() {
    fetch("https://academy-video-api.herokuapp.com/content/free-items", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data })
      });
  }
  render() {
  return (
    <div>
      <Header />
      <Hero />
      <MoovieCardContainer data = {this.state.data}/>
      <Switch>
        {["/login"].map((path) => (
          <Route exact path={path}>
          </Route>
        ))}
      </Switch>
      <Footer />
    </div>
  );
}
}

export default PageLayout;
