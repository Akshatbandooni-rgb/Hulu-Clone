import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import "./Videos.css";
import axios from "./axios";
import VideoCard from "./VideoCard";

function Videos({ fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [fetchUrl]);
  return (
    <div className="videos">
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Videos;
