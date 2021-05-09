import React, { useEffect } from "react";
import ForecastHeader from "./ForecastHeader";
import { useDispatch, useSelector } from "react-redux";
import { defaultCityDetails } from "../common/constants/titles";
import { loadCurrentCityWeather } from "../redux/actions/weatherActions";
import "./style.css";
import ForecastItem from "./ForecastItem";
import { getData } from "../common/functions/getDataFromApi";
import { searchUrls } from "../common/constants/urls";

const ForecastContainer = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector((state) => state.weatherReducer);
  const favouriteList = useSelector((state) => state.favoritesReducer);
  async function geopoistionLocationSuccess(poistion) {
    const currentPositionWeatherData = await getData(
      `${searchUrls.COORDINATES_CITY_SEARCH}${poistion.coords.latitude}%2C${poistion.coords.longitude}`
    );
    dispatch(
      loadCurrentCityWeather(
        currentPositionWeatherData.Key,
        currentPositionWeatherData.EnglishName,
        currentPositionWeatherData.Country.EnglishName
      )
    );
  }

  function geopoistionLocationError(error) {
    alert(`Error code ${error.code}:${"\n"}${error.message}`);
    dispatch(
      loadCurrentCityWeather(
        defaultCityDetails.DEFAULT_CITY_ID,
        defaultCityDetails.DEFAULT_CITY_NAME,
        defaultCityDetails.DEFAULT_CITY_COUNTRY
      )
    );
  }

  useEffect(() => {
    if (!Object.values(currentCity).length) {
      if (!navigator.geolocation) {
        alert(`Your browser don't support geolocation `);
        dispatch(
          loadCurrentCityWeather(
            defaultCityDetails.DEFAULT_CITY_ID,
            defaultCityDetails.DEFAULT_CITY_NAME,
            defaultCityDetails.DEFAULT_CITY_COUNTRY
          )
        );
      } else {
        navigator.geolocation.getCurrentPosition(
          geopoistionLocationSuccess,
          geopoistionLocationError
        );
      }
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

export default ForecastContainer;
