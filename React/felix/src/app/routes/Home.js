// import React, {useState, useEffect, useCallback} from "react";
import React, { Fragment, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import Hero from "../components/Hero";
import content from "../../content";
import MoovieCardContainer from "../components/MoovieCardContainer";
import Footer from "../components/Footer";

// const PageLayout = ({favorites, getItemId}) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
    
//   const drawMovies = useCallback(async () => {
//     const response = await fetch (
//       "https://academy-video-api.herokuapp.com/content/free-items",
//       {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     if (!response.ok) return setError("Trouble with getting movies");
//     setData(await response.json());
//   }, [setData, setError]);

//   useEffect(() => {
//     drawMovies();
//   }, [])

//   return (
//     <div>
//       <Header />
//       <Hero />
//       <MoovieCardContainer 
//       data = {data}
//       error = {error}
//       favorites = {favorites}
//       getItemId = {getItemId}
//       />
//       <Footer />
//     </div>
//   );
// }

const PageLayout = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies({ free: true });
  }, [fetchMovies]);

  return (
    <Fragment>
      <Header />
      <Hero />
      <MoovieCardContainer 
      />
      <Footer />
    </Fragment>
          );
        };

        const enhance = connect(null, (dispatch) => ({
          fetchMovies: bindActionCreators(content.actions.fetchMovies, dispatch),
        }));


// export default PageLayout;
export default enhance(PageLayout);
