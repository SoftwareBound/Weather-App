import React from "react";
import { navbarTitles } from "../../constants/titles";
import { iconsList } from "../../constants/icons";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand  navbar-light nav-container">
        <span className="navbar-brand" href="!#">
          {navbarTitles.MAIN_NAV}
        </span>

        <ul className="navbar-nav nav-list ">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              <span className="home-text"> {navbarTitles.HOME_NAV}</span>
              <span className="home-icon"> {iconsList.HOUSE_ICON}</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              <span className="fav-text">{navbarTitles.FAV_NAV}</span>
              <span className="fav-icon"> {iconsList.FAV_ICON}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
