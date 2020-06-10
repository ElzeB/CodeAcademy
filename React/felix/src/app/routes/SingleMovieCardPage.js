import React, {useState, useEffect, useCallback} from "react";
import SingleMovieCard from "../components/SingleMovieCard";
import {useHistory, useLocation, useParams} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SingleMovieCardPage() {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const {id} = useParams();

    const drawSingleMovieCard = useCallback(async () => {
        const response = await fetch (
            `https://academy-video-api.herokuapp.com/content/items/${id}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
        if (!response.ok) return setError("Trouble with getting movies");
        setData(await response.json());
    }, [setData, setError]);

    useEffect(() => {
        drawSingleMovieCard();
    }, [drawSingleMovieCard])

    return (
        <div>
             <Header />
             {data && !!data.length && data.map(
             item => (
             <SingleMovieCard 
              img={item.image}
              title={item.title} 
              description={item.description}
            //   isFavorite={favorites.includes(item.id)}
            //   onClick = {() => getItemId(item.id)}
             ></SingleMovieCard>
             )
            )}
             <Footer />
        </div>

    );
}

export default SingleMovieCardPage;