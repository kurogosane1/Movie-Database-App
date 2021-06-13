import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../requests";
import Trending from "../FrontPage/Trending";
import TopMovies from "./TopMovies";
import HorrorMovies from "./HorrorMovies";
import RomanceMovies from "./RomanceMovies";
import ComedyMovies from "./ComedyMovies";
import Documentaries from "./Documaries";

function Main() {
  const [movie, setMovie] = useState<string[]>();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/${requests.fetchActionMovies}`
      );
      console.log(request.data);
      setMovie(movie);
      return request.data;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>This is main Page</h2>
      <Trending />
      <TopMovies />
      <HorrorMovies />
      <RomanceMovies />
      <ComedyMovies />
      <Documentaries />
    </div>
  );
}

export default Main;
