import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "../axios";
import FlipMove from "react-flip-move";
import "./Results.css";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
