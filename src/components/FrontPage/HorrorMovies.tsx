import React from "react";
import { Rows, Columns, MoviePoster, MovieImage } from "../../styles";
import image from "../../assets/Test.jpg";

function HorrorMovies() {
  return (
    <Columns>
      <h2 style={{ textAlign: "left" }}>Horror Movies</h2>
      <Rows>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
        <MoviePoster>
          <MovieImage where={image} />
        </MoviePoster>
      </Rows>
    </Columns>
  );
}

export default HorrorMovies;
