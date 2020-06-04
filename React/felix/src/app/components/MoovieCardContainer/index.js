import React from "react";
import MovieCard from "../MovieCard";
import "./index.css";

class MoovieCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      favorites: []
    };
    console.log(this.state.favorites);
  }
  
  getItemId = id => {
    let {favorites} = this.state;
    if (favorites.includes(id)) {
      this.setState({favorites: favorites.filter(el => el !==id) });
    } else {
      this.setState({ favorites: favorites.concat(id) });
    }
  }

  render() {
    const {data} = this.props;
    return (
      <div className="MainBody">
        {data && !!data.length && data.map(
          item => (
            <MovieCard
            img={item.image}
            title={item.title} 
            description={item.description}
            isFavorite={this.state.favorites.includes(item.id)}
            onClick = {() => this.getItemId(item.id)}
          ></MovieCard>
          )
        )}
      </div>
      // <React.Fragment>
      //   <BigButton title="Get More Content"></BigButton>
      // </React.Fragment>
    );
  }
}

export default MoovieCardContainer;
