import React, { useEffect, useState } from "react";
import NetflixTitle from "../assets/icons/NetflixTitle";
import { Navbar, NavbarList, UserIcon } from "../styles";

function Nav() {
  const [show, handleShow] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <Navbar show={show}>
      <NetflixTitle />
      <NavbarList>
        <UserIcon />
      </NavbarList>
    </Navbar>
  );
}

export default Nav;
