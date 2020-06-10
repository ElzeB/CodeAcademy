import React from "react";
import "./index.css";
import SmallButton from "../../components/SmallButton";

function SingleMovieCard({img, title, description, isFavorite, onClick}) {

    const buttonText = isFavorite? 'Remove 💔': 'Favorite';
    const className = isFavorite? 'Small-btn-remove':'Small-btn';
  
    return (
        <div className="SingleMovieCard">
          <img className="SingleMovieCardImage" alt="Movie card Image" src={img}></img>
          <div className="SingleMovieCardTextContent">
            <div className="SingleMovieCardTitle">{title}</div>
            <div className="SingleMovieCardDescription">{description}</div>
            <SmallButton onClick={onClick} title={buttonText} className={className}/>
            <SmallButton onClick={onClick} title={buttonText} className={className}/>
          </div>
        </div>
    );
  }
  
  export default SingleMovieCard;