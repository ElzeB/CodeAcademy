import React, {useState, useCallback, useEffect} from "react";
import MoovieCardContainer from "../components/MoovieCardContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Content = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [favorites, setfavorites] = useState([]);

  // getItemId = (id) => {
  //   let { favorites } = this.state;
  //   if (favorites.includes(id)) {
  //     this.setState({ favorites: favorites.filter((el) => el !== id) });
  //   } else {
  //     this.setState({ favorites: favorites.concat(id) });
  //   }
  // };

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
          />
          <Footer />
      </div>
    );
  }

export default Content;
