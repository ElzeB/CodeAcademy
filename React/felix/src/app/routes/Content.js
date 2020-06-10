import React, {useState, useCallback, useEffect} from "react";
import MoovieCardContainer from "../components/MoovieCardContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Content = ({favorites, getItemId}) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const drawContent = useCallback(async () => {
    const response = await fetch (
      "https://academy-video-api.herokuapp.com/content/items",
      {
        method: "GET",
        headers: { authorization: localStorage.getItem("token")},
      }
    );
    if (!response.ok) return setError("Trouble with getting movies");
    setData(await response.json());
  }, [setData, setError]);

  useEffect(() => {
    drawContent();
  }, [])

    return (
      <div>
          <Header />
          <MoovieCardContainer 
          data = {data}
          error = {error}
          favorites = {favorites}
          getItemId = {getItemId}
          />
          <Footer />
          {/* <Loader /> */}

      </div>
    );
  }

export default Content;
