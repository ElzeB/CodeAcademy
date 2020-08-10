import React, { useState, useEffect, useCallback, Fragment } from "react";
import SingleMovieCard from "../components/SingleMovieCard";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const SingleMovieCardPage = () => {

  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  const drawSingleMovieCard = useCallback(async () => {
    console.log(movieId);
    
    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/items/${movieId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json", authorization: localStorage.getItem("token")},
      }
    );
    if (!response.ok) return setError("Trouble with getting movies");
    setMovie(await response.json());
  }, [setMovie, movieId]);

  useEffect(() => {
    drawSingleMovieCard();
  }, [drawSingleMovieCard]);

  return (
    <div>
      {!error && (
        <Fragment>
          <Header />
          <SingleMovieCard
            img={movie.image}
            title={movie.title}
            description={movie.description}
            video={movie.video}
            //   isFavorite={favorites.includes(item.id)}
            //   onClick = {() => getItemId(item.id)}
          ></SingleMovieCard>          
          )}
          <Footer />
        </Fragment>
      )}
      ;
    </div>
  );
};

export default SingleMovieCardPage;
