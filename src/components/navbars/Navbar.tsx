import React from "react";
import NetflixTitle from "../../assets/icons/NetflixTitle";
import { Navbar, NavbarList } from "../../styles/Navbar";
import { UserIcon } from "../../styles/buttons";

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
