import React from "react";
import NetflixTitle from "../../assets/icons/NetflixTitle";
import { Navbar, NavbarList, UserIcon } from "../../styles/";

function Nav() {
  return (
    <Navbar>
      <NetflixTitle />
      <NavbarList>
        <UserIcon />
      </NavbarList>
    </Navbar>
  );
}

export default Nav;
