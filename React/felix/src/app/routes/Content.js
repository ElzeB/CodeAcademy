import React from "react";
import MovieCard from "../components/MovieCard";
import MoovieCardContainer from "../components/MoovieCardContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      favorites: [],
    };
    console.log(this.state.favorites);
  }

  getItemId = (id) => {
    let { favorites } = this.state;
    if (favorites.includes(id)) {
      this.setState({ favorites: favorites.filter((el) => el !== id) });
    } else {
      this.setState({ favorites: favorites.concat(id) });
    }
  };

  componentDidMount() {
    fetch("https://academy-video-api.herokuapp.com/content/items", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <div>
          <Header />
          <MoovieCardContainer data = {this.state.data} />
          <Footer />
      </div>
    );
  }
}

export default Content;
