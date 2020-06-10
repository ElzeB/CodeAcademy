import React from "react";
import SmallButton from "../SmallButton";
import "./index.css";

function MovieCard({img, title, description, allFavorites, onClick}) {

  const className = allFavorites? 'Small-btn-remove':'Small-btn';

  return (
      <div className="MovieCard">
        <img className="MovieCardImage" alt="Movie card Image" src={img}></img>
        <div className="MovieCardTextContent">
          <div className="MovieCardTitle">{title}</div>
          <div className="MovieCardDescription">{description}</div>
          <SmallButton onClick={onClick} className={className}/>
        </div>
      </div>
  );
}

export default MovieCard;
