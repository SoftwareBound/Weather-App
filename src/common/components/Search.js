import React from "react";
import { iconsList } from "../constants/icons";

const Search = () => {
  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: "20px" }}>
        {" "}
        {iconsList.SEARCH_ICON}
      </span>
      <input type="text" placeholder="Search" style={{ paddingLeft: "40px" }} />
    </div>
  );
};

export default Search;
