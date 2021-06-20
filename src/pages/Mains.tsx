import React from "react";
import RowLines from "../components/Rows";
import requests from "../requests";
import Banner from "../components/Banner";

import Nav from "../components/Navbar";
export const Mains = () => {
  return (
    <>
      <Nav />
      <Banner fetchURL={requests.fetchTrending} />
      <RowLines
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <RowLines title="Trending" fetchURL={requests.fetchTrending} />
      <RowLines title="Top Rated" fetchURL={requests.fetchTopRated} />
      <RowLines title="Action" fetchURL={requests.fetchActionMovies} />
      <RowLines title="Comedies" fetchURL={requests.fetchComedyMovies} />
      <RowLines title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <RowLines title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <RowLines title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    </>
  );
};
