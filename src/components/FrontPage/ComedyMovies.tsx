import React from "react";
import { Rows, Columns, MoviePoster, MovieImage } from "../../styles";
import image from "../../assets/Test.jpg";

function ComedyMovies() {
  return (
    <Columns>
      <h2 style={{ textAlign: "left" }}>Comedy</h2>
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

export default ComedyMovies;
