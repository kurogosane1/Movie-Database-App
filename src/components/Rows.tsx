import React, { useState, useEffect } from "react";
import { Rows, MovieImage, Container, Text } from "../styles";
import { Header, MoviesData, MovieData } from "../types";
import axios from "axios";
import YouTube from "react-youtube";
const movieTrailer = require("movie-trailer");
import dotenv from "dotenv";
dotenv.config();

const RowLines: React.FC<Header> = ({ title, fetchURL, isLarge }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [movies, setMovies] = useState<MoviesData["Movie"]>();
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    setLoading(true);
    async function GetData(): Promise<any> {
      const request = await axios.get(
        `${process.env.REACT_APP_URL}${fetchURL}`
      );
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }
    GetData();
  }, [fetchURL]);

  const options = {
    height: "290",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function handleClick(movie: MovieData["Movie"]) {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || movie?.title)
        .then((url: string) => {
          console.log(url);
          console.log(new URL(url).search);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error: any) => console.log(error));
    }
  }

  return (
    <>
      <Container>
        <Text>{title}</Text>
        <Rows>
          {movies &&
            movies?.map((data) => {
              return (
                <MovieImage
                  key={data.id}
                  src={`${process.env.REACT_APP_IMAGE_EXTENSION}${
                    isLarge ? data.backdrop_path : data.poster_path
                  }`}
                  isLarge={isLarge}
                  alt={data.title}
                  onClick={() => handleClick(data)}
                />
              );
            })}
        </Rows>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
      </Container>
    </>
  );
};

export default RowLines;
