import React from "react";
import FrontNav from "../components/FrontNav";
import { HomeContainer } from "../styles";
import BrowseFooter from "../components/BrowseFooter";

function Home() {
  return (
    <>
      <FrontNav />
      <HomeContainer
        backgroundImage={`${process.env.REACT_APP_NETFLIX_BACKGROUND_IMAGES}`}>
        <h2>This is the home Page</h2>
      </HomeContainer>
      <BrowseFooter />
    </>
  );
}

export default Home;
