import React, { useEffect, useState } from "react";
import { Header } from "../styles/index";
import { BannerInt, MoviesData } from "../types";
import axios from "axios";
import dotenv from "dotenv";

const Banner: React.FC<BannerInt> = ({ fetchURL }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [movies, setMovies] = useState<MoviesData["Movie"]>();
  const [movie, setMovie] = useState<MoviesData["Movie"]>();

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
  return movie ? (
    <Header backgroundImage={"something"}>
      <h1>This is the banner</h1>
      <h2>This is where things will go</h2>
    </Header>
  ) : (
    <h1>Loading</h1>
  );
};

export default Banner;
