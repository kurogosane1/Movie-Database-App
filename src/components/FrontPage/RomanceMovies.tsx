import React from "react";
import { Rows, Columns, MoviePoster, MovieImage } from "../../styles";
import image from "../../assets/Test.jpg";

function RomanceMovies() {
  return (
    <Columns>
      <h2 style={{ textAlign: "left" }}>Romance Movies</h2>
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

export default RomanceMovies;
