import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <div id="left">
          <Link to="/">#Portfolio</Link>
        </div>
        <div id="right">
          <Link to="/">#Home</Link>
          <Link to="/aboutme">#aboutme</Link>
          <Link to="/myprojects">#myprojects</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
