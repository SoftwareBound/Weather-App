import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../redux/store";

const ForecastHeader = ({ currentCityData }) => {
  const dispatch = useDispatch();
  const getStatus = () => {
    dispatch({ type: "test" });
  };
  return (
    <div className="row">
      <div className="col-1">
        <img
          src={currentCityData.icon}
          alt={currentCityData.description}
          style={{ marginRight: "20px", border: "outset" }}
        />
      </div>
      <div
        className="col-4 currentForecastData"
        style={{ marginRight: "10px", marginLeft: "10px" }}
      >
        <div> {currentCityData.cityName}</div>
        {` ${currentCityData.value} ${currentCityData.unit.toLowerCase()}`}
      </div>
      <div className="col-5" style={{ textAlign: "right" }}>
        <button onClick={getStatus}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default ForecastHeader;
