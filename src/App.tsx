import React from "react";
// import { Button, UserIcon } from "../src/styles/buttons";
import NetflixTitle from "../src/assets/icons/NetflixTitle";
import { Mains } from "../src/pages/Mains";
import Nav from "../src/components/navbars/Navbar";
import Banner from "./components/Banner";
const App = () => {
  return (
    <div style={{ backgroundColor: "#080707", color: "#E5E5E5" }}>
      <Nav />
      <Mains />
    </div>
  );
};

export default App;
