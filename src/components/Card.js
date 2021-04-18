import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./Card.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Card = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="card">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie?.overview}
      />
      <h2>{movie?.title || movie?.original_title || movie?.name}</h2>
      <p className="card__infoStat">
        <ThumbUpIcon />
        {movie?.vote_count}
      </p>
    </div>
  );
});

export default Card;
