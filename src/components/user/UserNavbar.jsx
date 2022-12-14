import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          {/* here you can add logo */}
          <h2>QuickLoan</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/applicaiton" activeStyle>
            APPLY FOR LOAN
          </NavLink>
          <NavLink to="/profile">MY PROFILE</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;