import React from "react";
import MovieCard from "../MovieCard";
import "./index.css";
import BigButton from "../BigButton";

class MainBody extends React.Component {
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
        this.setState({ data });
      });
  }

  render() {
    return (
      <div className="MainBody">
        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[0].image}
            title={this.state.data[0].title}
            description={this.state.data[0].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[1].image}
            title={this.state.data[1].title}
            description={this.state.data[1].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[2].image}
            title={this.state.data[2].title}
            description={this.state.data[2].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[3].image}
            title={this.state.data[3].title}
            description={this.state.data[3].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[4].image}
            title={this.state.data[4].title}
            description={this.state.data[4].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[5].image}
            title={this.state.data[5].title}
            description={this.state.data[5].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[6].image}
            title={this.state.data[6].title}
            description={this.state.data[6].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[7].image}
            title={this.state.data[7].title}
            description={this.state.data[7].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[8].image}
            title={this.state.data[8].title}
            description={this.state.data[8].description}
          ></MovieCard>
        )}

        {this.state.data.length > 0 && (
          <MovieCard
            img={this.state.data[9].image}
            title={this.state.data[9].title}
            description={this.state.data[9].description}
          ></MovieCard>
        )}
      </div>
      // <React.Fragment>
      //   <BigButton title="Get More Content"></BigButton>
      // </React.Fragment>
    );
  }
}

export default MainBody;
