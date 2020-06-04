import React, {useState, useEffect, useCallback} from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoovieCardContainer from "../components/MoovieCardContainer";
import Footer from "../components/Footer";

const PageLayout = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
    
  const drawMovies = useCallback(async () => {
    const response = await fetch (
      "https://academy-video-api.herokuapp.com/content/free-items",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) return setError("Trouble with getting movies");
    setData(await response.json());
  }, [setData, setError]);

  useEffect(() => {
    drawMovies();
  }, [])

  return (
    <div>
      <Header />
      <Hero />
      <MoovieCardContainer 
      data = {data}
      error = {error}
      />
      <Footer />
    </div>
  );
}


export default PageLayout;
