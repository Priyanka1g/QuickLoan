import { Button } from "@mui/material";
import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { styled } from "@mui/material/styles";
import classes from "./Navbar.module.css";

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
          <NavLink to="/admin/info" activeStyle>
            Infographics
          </NavLink>
          <NavLink to="/admin/requests" activeStyle>
            Pending applications
          </NavLink>
          <NavLink to="/admin/borrowers">Borrowers</NavLink>
          <NavLink to="#" activeStyle>
            <Button sx={{}} variant="outlined">
              Logout
            </Button>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
