import React from "react";
import { navbarTitles } from "../constants/titles";
import { iconsList } from "../constants/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md  navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="!#" style={{ marginLeft: "1em" }}>
          {navbarTitles.MAIN_NAV}
        </a>

        <div className="collapse navbar-collapse">
          <ul
            className="navbar-nav mr-auto  mt-md-0"
            style={{ marginInlineStart: "auto", paddingInlineEnd: "50px" }}
          >
            <li className="nav-item active">
              <Link className="nav-link" to="/ron-benzvi-25-04-21">
                <span> {navbarTitles.HOME_NAV}</span>
                <span> {iconsList.HOUSE_ICON}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/on-benzvi-25-04-21/favorites">
                <span> {navbarTitles.FAV_NAV}</span>
                <span> {iconsList.FAV_ICON}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
