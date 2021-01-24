import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const posterBaseUrl = "https://image.tmdb.org/t/p/original/";

  //Use effect
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests[0].url);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* Background image in header */}
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${posterBaseUrl}${movie?.backdrop_path})`,
          backgroundPosition: "center center"
        }}
        alt={movie?.title || movie?.name || movie?.original_name}
      >
        <div className="banner__contents">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play </button>
            <button className="banner__button">My List</button>
          </div>
          <p className="banner__description">
            {movie?.overview && movie.overview.substring(0, 350)}...
          </p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
