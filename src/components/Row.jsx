import "./row.css";
import axios from "../axios";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ data }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const imdbPosterBaseUrl = "https://image.tmdb.org/t/p/original/";

  //Use effect
  useEffect(() => {
    async function fetchData() {
      //axios.get gets base url from axios file and data.url is prop
      const request = await axios.get(data.url);
      setmovies(request.data.results);
    }
    fetchData();
  }, [data.url]);

  //options for youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  //Handle click
  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        // movieTrailer(movie.name)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{data.genre}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <div
            className={
              data.genre !== "Netflix Originals"
                ? `row__poster`
                : `row__poster row__posterLarge`
            }
            key={movie.id}
          >
            <img
              onClick={() => handleClick(movie)}
              src={
                data.genre === "Netflix Originals"
                  ? `${imdbPosterBaseUrl}${movie.poster_path}`
                  : `${imdbPosterBaseUrl}${movie.backdrop_path}`
              }
              alt={movie.name}
            />
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
