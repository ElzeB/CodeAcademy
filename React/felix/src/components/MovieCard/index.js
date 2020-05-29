import React from "react";
import SmallButton from "../SmallButton";
import "./index.css";

function MovieCard({img, title, description}) {

  const [isFavorite, setButton] = React.useState(true);

  const onClick = (event) => {
    console.log('Test');
    
    setButton(!isFavorite)
  }

  const buttonText = isFavorite? 'Favorite': 'Remove 💔';
  const className = isFavorite? 'Small-btn':'Small-btn-remove ';

  return (
      <div className="MovieCard">
        <img className="MovieCardImage" src={img}></img>
        <div className="MovieCardTextContent">
          <div className="MovieCardTitle">{title}</div>
          <div className="MovieCardDescription">{description}</div>
          <SmallButton onClick={onClick} title={buttonText} className={className}/>
        </div>
      </div>
  );
}

export default MovieCard;
