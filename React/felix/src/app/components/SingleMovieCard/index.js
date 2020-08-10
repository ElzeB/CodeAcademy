import React, { useState} from "react";
import "./index.css";
import closeImage from "../../images/close.png";
import SmallButton from "../../components/SmallButton";

function SingleMovieCard({
  img,
  title,
  description,
  isFavorite,
  onClick,
  video,
}) {
  const buttonText = isFavorite ? "Remove 💔" : "Favorite";
  const className = isFavorite ? "Small-btn-remove" : "Small-btn";

  const [watch, setWatch] = useState(false);

  const toggleModal = () => setWatch((prevState) => !prevState);

  return (
    <div className="SingleMovieCardContainer">
      <div className="SingleMovieCard">
        <img
          className="SingleMovieCardImage"
          alt="Movie card Image"
          src={img}
        ></img>
        <div className="SingleMovieCardTextContent">
          <div className="SingleMovieCardTitle">{title}</div>
          <div className="SingleMovieCardDescription">{description}</div>
          <SmallButton
            onClick={onClick}
            title={buttonText}
            className={className}
          />
          <SmallButton
            onClick={toggleModal}
            title="Watch"
            className="watch-button"
          />
        </div>
      </div>
      <div className={`modal ${watch ? "is-active" : ""}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-content">
          <div className="videoWrapper">
            <iframe
              title="video"
              allowfullscreen
              frameborder="0"
              src={video}
            ></iframe>
            <img
              src={closeImage}
              aria-label="close"
              onClick={toggleModal}
              title="Close"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
    
  export default SingleMovieCard;