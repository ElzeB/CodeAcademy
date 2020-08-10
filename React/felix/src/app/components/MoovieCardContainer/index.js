import React, { useState } from "react";
import { connect } from "react-redux";
import MovieCard from "../MovieCard";
import BigButton from "../BigButton";
import content from "../../../content";
import "./index.css";

const MoovieCardContainer = ({ data, favorites, getItemId }) => {
  return (
    <div className="MainBody">
      <div className="CardBody">
        {data &&
          !!data.length &&
          data.map((item) => {
            return (
              <MovieCard
                img={item.image}
                title={item.title}
                description={item.description}
                // isFavorite={favorites.includes(item.id)}
                onClick={() => getItemId(item.id)}
                movieId={item.id}
              />
            );
          })}
      </div>
    
        <BigButton title="Get More Content"></BigButton>
      
    </div>
  );
};

// export default MoovieCardContainer;

const enhance = connect((state) => ({
  data: content.selectors.getMoviesData(state),
  loading: content.selectors.isFetchingMovies(state),
  error: content.selectors.getMoviesError(state),
}));

export default enhance(MoovieCardContainer);
