import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
      <nav className="my-nav fixed-top">
      <div className="login-link">
      <Link to="/">  <h2>SAILING <span>NOW</span> </h2> </Link>
       </div>
          <div className="nav-link">
              <Link to="/news">News</Link>
              <Link to="/events">Events</Link>
              <Link to="/photo">Photo Albums</Link>
              <Link to="/sailor">Sailors</Link>
          </div>
          <div className="login-link">
          <Link  to="/login">Login</Link>
          </div>
          
   </nav>
  );
};

export default Header;
