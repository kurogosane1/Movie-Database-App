import React, { useEffect, useState } from "react";
import {
  Header,
  BannerContainer,
  BannerOverview,
  BannerButton,
} from "../styles/index";
import { BannerInt, MovieData } from "../types";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const Banner: React.FC<BannerInt> = ({ fetchURL }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [movie, setMovie] = useState<MovieData["Movie"]>();

  useEffect(() => {
    setLoading(true);
    async function GetData(): Promise<any> {
      const request = await axios.get(
        `${process.env.REACT_APP_URL}${fetchURL}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setLoading(false);
      return request;
    }
    GetData();
  }, []);

  const reduceLength = (str: string, num: number) => {
    console.log(typeof str);
    return str?.length > num ? str.substr(0, num - 1) + " . . ." : str;
  };

  return movie ? (
    <Header
      backgroundImage={`${process.env.REACT_APP_IMAGE_EXTENSION}${movie.backdrop_path}`}>
      <BannerContainer>
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div>
          <BannerButton>Play</BannerButton>
          <BannerButton>Info</BannerButton>
        </div>
        <BannerOverview>{reduceLength(movie?.overview, 150)}</BannerOverview>
      </BannerContainer>
    </Header>
  ) : (
    <h1>Loading</h1>
  );
};

export default Banner;
