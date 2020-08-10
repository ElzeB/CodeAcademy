import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import content from "../../../content";
import { Link } from "react-router-dom";
import SmallButton from "../SmallButton";
import "./index.css";

function MovieCard({ img, title, description, isFavorite, movieId, toggleFavorite }) {

  // const isFavorite = !!allFavorites && allFavorites.includes(movieId);
  const buttonText = isFavorite ? "Remove 💔" : "Favorite";
  const className = isFavorite ? "Small-btn-remove" : "Small-btn";

  const onClick = () => toggleFavorite(movieId, isFavorite);

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
        <SmallButton onClick={onClick} className={className} movieId={movieId} title={buttonText} style={{position: "absolute"}} />
      </div>
    </div>
  );
}

// function mapStateToProps({ content: {favorites} }) {
//   return {
//     allFavorites: favorites,
//   };
// }

const withSecretToLife = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent history="VEry History" secretToLife={42} {...this.props} />;
    }
  }

  return HOC;
};


// function mapDispatchToProps(dispatch) {
//   return {
//     toggleFavorite: (id) => dispatch({ type: "TOGGLE_FAVORITE", id }),
//   };
// }

const enhance = compose(
  withRouter,
  withSecretToLife,
  connect(
    (state, { movieId }) => {
      return {
        isFavorite: content.selectors.isFavoriteById(state, movieId), 
      };
    },
    (dispatch) => {
      return {
        toggleFavorite: bindActionCreators(content.actions.toggleFavorite, dispatch),
      };
    }
  )
);

// export default connect(mapStateToProps, mapDispatchToProps) (MovieCard);
export default enhance(MovieCard);
