import React, {useState} from "react";
import MovieCard from "../MovieCard";
import "./index.css";

const MoovieCardContainer = ({data, favorites, getItemId}) => {

    return (
      <div className="MainBody">
        {data && !!data.length && data.map(
          item => (
            <MovieCard
            img={item.image}
            title={item.title} 
            description={item.description}
            isFavorite={favorites.includes(item.id)}
            onClick = {() => getItemId(item.id)}
          ></MovieCard>
          )
        )}
      </div>
      // <React.Fragment>
      //   <BigButton title="Get More Content"></BigButton>
      // </React.Fragment>
    );
  }

export default MoovieCardContainer;
