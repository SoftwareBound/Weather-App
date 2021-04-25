import React from "react";
import { navbarTitles } from "../constants/titles";
import { iconsList } from "../constants/icons";

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
              <a className="nav-link" href="/">
                <span> {navbarTitles.HOME_NAV}</span>
                <span> {iconsList.HOUSE_ICON}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">
                <span> {navbarTitles.FAV_NAV}</span>
                <span> {iconsList.FAV_ICON}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
