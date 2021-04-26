import React from "react";
import { useDispatch } from "react-redux";

import { iconUrls } from "../common/constants/urls";

const ForecastHeader = ({ currentCityData }) => {
  const dispatch = useDispatch();
  const getStatus = () => {
    dispatch({ type: "test1" });
  };

  return (
    <div className="row">
      <div className="col-1">
        <img
          src={`${iconUrls.WEATHER_URL_PREFIX}${
            currentCityData.currentWeather.WeatherIcon < 10
              ? `0${currentCityData.currentWeather.WeatherIcon}`
              : `${currentCityData.currentWeather.WeatherIcon}`
          }${iconUrls.WEATHER_URL_SUFFIX}`}
          alt={currentCityData.currentWeather.WeatherText}
          style={{ marginRight: "20px", border: "outset" }}
        />
      </div>
      <div
        className="col-4 currentForecastData"
        style={{ marginRight: "10px", marginLeft: "10px" }}
      >
        <div> {currentCityData.cityDetails.name}</div>
        {` ${currentCityData.currentWeather.Temperature.Metric.Value} ${currentCityData.currentWeather.Temperature.Metric.Unit}`}
      </div>
      <div className="col-5" style={{ textAlign: "right" }}>
        <button onClick={getStatus}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default ForecastHeader;
