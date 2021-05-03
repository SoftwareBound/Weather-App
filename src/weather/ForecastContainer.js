import React, { useEffect } from "react";
import ForecastHeader from "./ForecastHeader";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { defaultCityDetails } from "../common/constants/titles";
import { loadCurrentCityWeather } from "../redux/actions/weatherActions";
import "./style.css";
import ForecastItem from "./ForecastItem";

const ForecastContainer = ({ currentCity, favouriteList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.values(currentCity).length) {
      dispatch(
        loadCurrentCityWeather(
          defaultCityDetails.DEFAULT_CITY_ID,
          defaultCityDetails.DEFAULT_CITY_NAME
        )
      );
    }
  }, [currentCity]);

  if (Object.values(currentCity).length < 3) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  return (
    <div className="container forecast-cotainer">
      <div className="row">
        <ForecastHeader
          currentCityData={currentCity}
          favouriteList={favouriteList}
        />
      </div>
      <div className="row weather-text">
        {currentCity.currentWeather.WeatherText}
      </div>
      <div className="row forecast-container">
        {currentCity.forecast.DailyForecasts.map((day) => {
          return (
            <div key={day.Date} className="col forecast-item-container">
              <ForecastItem data={day} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentCity: state.weatherReducer,
    favouriteList: state.favoritesReducer,
  };
};

export default connect(mapStateToProps)(ForecastContainer);
