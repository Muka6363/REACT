import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {user ? (
        <NavLink to="/login" onClick={() => setUser(false)}>
          Logout
        </NavLink>
      ) : (
        <NavLink to="/login" onClick={() => setUser(true)}>
          Login
        </NavLink>
      )}
      <a href="https://github.com/Muka6363" target="_blank">
        GITHUB
      </a>
    </Nav>
  );
};

export default Navbar;
