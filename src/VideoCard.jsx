import React, { forwardRef } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TextTruncate from "react-text-truncate";
import "./VideoCard.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
        alt={`${movie?.original_name || movie?.original_title || movie?.name}`}
      ></img>
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <h3>{`${
        movie?.original_name || movie?.original_title || movie?.name
      }`}</h3>
      <p className="videoCard__stats">
        {`${movie.media_type}     ${
          movie?.release_date || movie?.first_air_date
        }  `}
        <ThumbUpIcon /> {`   ${movie?.vote_average}`}
      </p>
    </div>
  );
});

export default VideoCard;
