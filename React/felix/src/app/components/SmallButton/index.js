import React from "react";
import { connect } from "react-redux";
import "./index.css";

function SmallButton({
  className,
  allFavorites,
  toggleFavorite,
  movieId,
}) {
  const onClick = () => toggleFavorite(movieId);

  return (
    <button className={className} onClick={onClick}>
      {!!allFavorites && allFavorites.includes(movieId)
        ? "Remove 💔"
        : "Favorite"}
    </button>
  );
}

function mapStateToProps({ favorites }) {
  return {
    allFavorites: favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: "TOGGLE_FAVORITE", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallButton);
