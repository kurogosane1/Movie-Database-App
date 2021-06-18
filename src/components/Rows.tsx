import React, { useState, useEffect } from "react";
import { Rows, MovieImage } from "../styles";
import { Header, MoviesData } from "../types";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const RowLines: React.FC<Header> = ({ title, fetchURL, isLarge }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [movies, setMovies] = useState<MoviesData["Movie"]>();

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

  return (
    <>
      <div>
        <h1>{title}</h1>
        <Rows>
          {movies &&
            movies.map((data) => {
              return (
                <MovieImage
                  key={data.id}
                  src={`${process.env.REACT_APP_IMAGE_EXTENSION}${
                    isLarge ? data.backdrop_path : data.poster_path
                  }`}
                  isLarge={isLarge}
                  alt={data.orignal_name}
                />
              );
            })}
        </Rows>
      </div>
    </>
  );
};

export default RowLines;
