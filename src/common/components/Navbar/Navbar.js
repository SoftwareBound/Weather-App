import React from "react";
import { navbarTitles } from "../../constants/titles";
import { iconsList } from "../../constants/icons";
import { Link } from "react-router-dom";
import "./style.css";
import {
  NavBarButtons,
  NavBarTitle,
  ThemeButton,
  ThemeButtonContainer,
} from "../../../global";
const Navbar = ({ toggleChange, themeValue }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand  navbar-light nav-container">
        <NavBarTitle className>{navbarTitles.MAIN_NAV}</NavBarTitle>
        <ul className="navbar-nav nav-list ">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              <NavBarButtons className="home-text">
                {navbarTitles.HOME_NAV}
              </NavBarButtons>

              <span className="home-icon"> {iconsList.HOUSE_ICON}</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              <NavBarButtons className="fav-text">
                {navbarTitles.FAV_NAV}
              </NavBarButtons>
              <span className="fav-icon"> {iconsList.FAV_ICON}</span>
            </Link>
          </li>
          <ThemeButtonContainer className="nav-item">
            <ThemeButton onClick={() => toggleChange()}>
              {themeValue === "light"
                ? iconsList.SUN_ICON
                : iconsList.MOON_ICON}
            </ThemeButton>
          </ThemeButtonContainer>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
