import React from "react";
import { connect } from "react-redux";
import "./index.css";

function SmallButton({
  allFavorites,
  toggleFavorite,
  movieId,
  title,
  className,
  onClick
}) {
  // const onClick = () => toggleFavorite(movieId);
  // const isFavorite = !!allFavorites && allFavorites.includes(movieId);
  // const className = isFavorite ? "Small-btn-remove" : "Small-btn";

  return (
    <button className={className} onClick={onClick}>
      {title}
       {/* {!!allFavorites && allFavorites.includes(movieId) ? "Remove 💔" : "Favorite"} */}
    </button>
  );
}

// function mapStateToProps({ favorites }) {
//   return {
//     allFavorites: favorites,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     toggleFavorite: (id) => dispatch({ type: "TOGGLE_FAVORITE", id }),
//   };
// }

export default /*connect(mapStateToProps, mapDispatchToProps)*/ SmallButton;
