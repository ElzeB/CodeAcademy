import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SmallButton from "../SmallButton";
import "./index.css";

function MovieCard({ img, title, description, allFavorites, movieId, toggleFavorite }) {

  
  const isFavorite = !!allFavorites && allFavorites.includes(movieId);
  const buttonText = isFavorite ? "Remove 💔" : "Favorite";
  const className = isFavorite ? "Small-btn-remove" : "Small-btn";

  const onClick = () => toggleFavorite(movieId);

  return (
    <div className="MovieCard">
      <Link to={`/content/${movieId}`}>
        <img className="MovieCardImage" alt="Movie card Image" src={img}></img>
      </Link>
      <div className="MovieCardTextContent">
        <Link to={`/content/${movieId}`}>
          <div className="MovieCardTitle">{title}</div>
          <div className="MovieCardDescription">{description}</div>
        </Link>
        <SmallButton onClick={onClick} className={className} movieId={movieId} title={buttonText} />
      </div>
    </div>
  );
}

function mapStateToProps({ content: {favorites} }) {
  return {
    allFavorites: favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: "TOGGLE_FAVORITE", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MovieCard);
