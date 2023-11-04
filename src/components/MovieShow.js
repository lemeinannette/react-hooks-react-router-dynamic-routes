// MovieShow.js
import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams();
  const movieId = params.movieId;

  if (!movies[movieId]) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h3>{movies[movieId].title}</h3>
      {/* Display other movie details here */}
    </div>
  );
}

export default MovieShow;
